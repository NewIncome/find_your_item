const currItemDiv = clas => document.querySelector(`.${clas}`);

const getItemID = itemDiv => Number(itemDiv.getAttribute('data-index')) + 1;

const curItemName = (items, id) => items.find(itm => itm.id === id).name;

const toDateTime = dt => {
  if (typeof dt === 'string' && dt.slice(0, 10).match(/-/g).length === 2) {
    return `${dt.slice(0, 10)} ${dt.slice(11, 16)}`;
  }
  return dt;
};

export {
  currItemDiv, getItemID, curItemName, toDateTime,
};
