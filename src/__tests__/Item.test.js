import React from 'react';
import renderer from 'react-test-renderer';
import '@testing-library/jest-dom';
import Item from '../components/Item';

const item = {
  id: 1,
  name: 'item name',
  description: 'item description',
  created_at: '2021-12-02',
  updated_at: '2021-12-02',
}

describe('Item component', () => {
  test('is displayed correctly', () => {
    const tree = renderer.create(<Item item={item} />);
    expect(tree.toJSON()).toMatchSnapshot();
  });

  test("has a 'price' prop", () => {
    const tree = renderer.create(<Item item={item} price={135} />).root;
    expect(tree.findByType(Item).props.price).toBe(135);
  });

  test("has an 'items' prop", () => {
    const tree = renderer.create(<Item item={item} />).root;
    expect(tree.findByType(Item).props.item).toBe(item);
  });

  test('has an h3 element', () => {
    const tree = renderer.create(<Item item={item} pg='' />).root;
    expect(tree.findByProps({ className: 'itm-name' }).children).toEqual([`${item.created_at} `]);
  });

  test('has an p element', () => {
    const tree = renderer.create(<Item item={item} />).root;
    expect(tree.findByProps({ className: 'stars' }).children).toEqual(['★★★★☆']);
  });
});
