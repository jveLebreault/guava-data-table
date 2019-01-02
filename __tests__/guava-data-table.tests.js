import { mount } from '@vue/test-utils';
import DataTable from "../src/components/data-table/guava-data-table.vue";

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
    id: 1,
    name: 'item2',
    amount: 30
  },
  {
    id: 3,
    name: 'item3',
    amount: 15
  }
];

describe('DataTable', () => {
    test('is a Vue instance', () => {
      const wrapper = mount(DataTable, {
        propsData: {
          columns: column,
          rows: rows
        }
      })
      expect(wrapper.isVueInstance()).toBeTruthy()
    })
  })