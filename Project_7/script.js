const insert = document.getElementById('insert')

window.addEventListener('keydown', (e)=>{
    insert.innerHTML = `
    <table>
  <tr>
    <th>key</th>
    <th>keycode</th>
    <th>name</th>
  </tr>
  <tr>
    <td>${e.key === " "?'space':e.key}</td>
    <td>${e.keyCode}</td>
    <td>${e.name}</td>
  </tr>
  <tr>
    <td>Centro comercial Moctezuma</td>
    <td>Francisco Chang</td>
    <td>Mexico</td>
  </tr>
</table>`
})