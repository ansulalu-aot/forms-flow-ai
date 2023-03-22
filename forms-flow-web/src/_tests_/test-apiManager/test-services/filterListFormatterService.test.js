import { sortByPriorityList } from '../../../apiManager/services/filterListFormatterService';

describe('filterListFormatterService', () => {
  describe('sortByPriorityList', () => {
    it('should sort an empty list correctly', () => {
      const result = sortByPriorityList([]);
      expect(result).toEqual([]);
    });

    it('should sort a list of items with priorities correctly', () => {
      const list = [
        { name: 'item1', properties: { priority: 2 } },
        { name: 'item2', properties: { priority: 0 } },
        { name: 'item3', properties: { priority: 1 } },
      ];
      const result = sortByPriorityList(list);
      expect(result).toEqual([
        { name: 'item2', properties: { priority: 0 } },
        { name: 'item3', properties: { priority: 1 } },
        { name: 'item1', properties: { priority: 2 } },
      ]);
    });

    it('should sort a list of items with missing priorities correctly', () => {
      const list = [
        { name: 'item1', properties: { priority: 2 } },
        { name: 'item2', properties: {} },
        { name: 'item3', properties: { priority: 1 } },
      ];
      const result = sortByPriorityList(list);
      expect(result).toEqual([
        { name: 'item2', properties: {} },
        { name: 'item3', properties: { priority: 1 } },
        { name: 'item1', properties: { priority: 2 } },
      ]);
    });
  });
});
