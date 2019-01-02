import Vue from 'vue';
import { mount } from '@vue/test-utils';
import DataTable from "../src/components/data-table/guava-data-table.vue";
import ColumnHeader from "../src/components/data-table/header-component/column-header.vue";
import DataCell from "../src/components/data-table/data-cell-component/data-cell.vue";

const column = [
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

const rows = [
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

describe('guava-data-table', () => {
    const wrapper = mount(DataTable, {
        propsData: {
          columns: column,
          rows: rows
        }
      });

    test('is a Vue instance', () => {
      expect(wrapper.isVueInstance()).toBeTruthy();
    });

    it('Renders sortable icon in header', () => {
        const headers = wrapper.findAll(ColumnHeader).filter(header => header.vm.column.isSortable);
        expect(headers.at(0).contains('.typcn-arrow-unsorted')).toBe(true);
    });

    it('Render rows are not sorted', () => {
        const rows = wrapper.findAll('tbody>tr>td:last-child');
        expect(rows.at(0).text()).toBe('20');
    });

    it('Sort rows after clicking sortable header', () => {
        const headers = wrapper.findAll(ColumnHeader).filter(header => header.vm.column.isSortable);
        const rows = wrapper.findAll('tbody>tr>td:last-child');

        console.log(wrapper.vm.rows[0]);

        headers.at(0).find('a.table-header').trigger('click');

        console.log(wrapper.vm.rows[0]);

        expect(rows.at(0).text()).toBe('15');
    });

    it('Renders edit button on editable fields', () => {
        const editableCell = wrapper.findAll(DataCell).filter(dataCell => dataCell.vm.column.isEditable);
        expect(editableCell.at(0).find('button').text()).toBe('Edit');
    });
  });