const curItemName = (items, id) => items.find(itm => itm.id === id).name;

const currItemDiv = clas => document.querySelector(`.${clas}`);

const toDateTime = dt => {
  if (typeof dt === 'string' && dt.slice(0, 10).match(/-/g).length === 2) {
    return `${dt.slice(0, 10)} ${dt.slice(11, 16)}`;
  }
  return dt;
};

export { curItemName, currItemDiv, toDateTime };
