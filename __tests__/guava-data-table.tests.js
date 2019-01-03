import Vue from 'vue';
import { mount } from '@vue/test-utils';
import DataTable from "../src/components/data-table/guava-data-table.vue";
import ColumnHeader from "../src/components/data-table/header-component/column-header.vue";
import DataCell from "../src/components/data-table/data-cell-component/data-cell.vue";

const tableColumns = [
  {
    header: 'Id',
    field: 'id'
  },
  {
    header: 'Name',
    field: 'name',
    isEditable: true
  },
  {
    header: 'Amount',
    field: 'amount',
    isSortable: true
  }
];

const tableRows = [
  {
    id: 1,
    name: 'item1',
    amount: 20
  },
  {
    id: 2,
    name: 'item2',
    amount: 30
  },
  {
    id: 3,
    name: 'item3',
    amount: 15
  }
];

const objectData = {
    obj1: {
        id: 1,
        name: 'item1',
        amount: 20
    },

    obj2: {
        id: 2,
        name: 'item2',
        amount: 30
    },

    obj3: {
        id: 3,
        name: 'item3',
        amount: 15
    }
};

const mountComponent = (rows = tableRows, columns = tableColumns) => {
    return mount(DataTable, {
        propsData: {
            rows,
            columns
        }
    });
};

describe('guava-data-table', () => {

    test('is a Vue instance', () => {
        const wrapper = mountComponent();

        expect(wrapper.isVueInstance()).toBeTruthy();
    });

    it('Renders sortable icon in header', () => {
        const wrapper = mountComponent();

        const headers = wrapper.findAll(ColumnHeader).filter(header => header.vm.column.isSortable);
        expect(headers.at(0).contains('.typcn-arrow-unsorted')).toBe(true);
    });

    it('Rendered rows are not sorted', () => {
        const wrapper = mountComponent();

        const rows = wrapper.findAll('tbody>tr>td:last-child');
        expect(rows.at(0).text()).toBe('20');
    });

    it('Sort rows in descending order after clicking sortable header', () => {
        const wrapper = mountComponent();

        const headers = wrapper.findAll(ColumnHeader).filter(header => header.vm.column.isSortable);
        headers.at(0).find('a.table-header').trigger('click');
        expect(wrapper.vm.rows[0].amount).toBeLessThan(wrapper.vm.rows[1].amount);
    });

    // it('Sorted row has correct icon class', () => {
    //     const headers = wrapper.findAll(ColumnHeader).filter(header => header.vm.column.isSortable);
    //     headers.at(0).setData({isSorted: true, sortOrder: 'desc'});
    //     console.log(headers.at(0).vm.getSortedIconClass);
    //     expect(headers.at(0).contains('.typcn-arrow-sorted-down')).toBe(true);
    // });

    it('Renders edit button on editable fields', () => {
        const wrapper = mountComponent();

        const editableCell = wrapper.findAll(DataCell).filter(dataCell => dataCell.vm.column.isEditable);
        expect(editableCell.at(0).find('button').text()).toBe('Edit');
    });

    it('Changes text on cell button after click', () => {
        const wrapper = mountComponent();

        const editableCell = wrapper.findAll(DataCell).filter(dataCell => dataCell.vm.column.isEditable);
        editableCell.at(0).find('button').trigger('click');
        console.log(editableCell.at(0).html());
        console.log('TEXTAREA',editableCell.at(0).find('textarea').text());
        expect(editableCell.at(0).find('button').text()).toBe('Save');
    });

    it('Renders textarea after clicking edit button in datacell', () => {
        const wrapper = mountComponent();

        const editableCell = wrapper.findAll(DataCell).filter(dataCell => dataCell.vm.column.isEditable);
        editableCell.at(0).find('button').trigger('click');
        expect(editableCell.at(0).contains('textarea')).toBe(true);
    });
  });