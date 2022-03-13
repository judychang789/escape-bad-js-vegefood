// TODO: 修正 ESLint 錯誤、補上分號、前輩說要改單引號 QQ
const url = 'https://hexschool.github.io/js-filter-data/data.json';

const table = document.querySelector('.table-content');
let showData = [];

let category = '';
const filter = document.querySelector('.filter');

let data = [];

// this.$axios.get(url)
//   .then(function (res) {
//     data = res.data.filter(a => a.作物名稱)
// TODO: 之後拆成 renderData 函式
function renderData(dataitem) {
  let str = '';
  dataitem.forEach((b) => {
  // TODO: 改成 ES6 的 Template Literals (字面字串符)
    const content = `<tr>
    <td>${b.作物名稱}</td>
    <td>${b.市場名稱}</td>
    <td>${b.上價}</td>
    <td>${b.中價}</td>
    <td>${b.下價}</td>
    <td>${b.平均價}</td>
    <td>${b.交易量}</td>
    </tr>`;
    str += content;
  });
  table.innerHTML = str;
}

function filterCategory(e) {
  if (e.target.nodeName === 'BUTTON') {
    category = e.target.dataset.category;
    showData = data.filter((i) => i.種類代碼 === category);
    // TODO: 之後拆成 renderData 函式
    renderData(showData);
  }
}

filter.addEventListener('click', filterCategory);

this.$axios.get(url)
  .then((res) => {
    data = res.data.filter((a) => a.作物名稱);
    renderData(data);
  });
