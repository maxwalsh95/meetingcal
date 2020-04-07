class Calendar extends HTMLElement {

  set calendar(calendar) {
    this.innerHTML = `
    <div>
    <input type="text">
    <div>
      <button>b</button>
      <button>month</button>
      <button>f</button>
      <table>
        <thead>
          <td>Mo</td>
          <td>Tu</td>
          <td>We</td>
          <td>Th</td>
          <td>Fr</td>
          <td>Sa</td>
          <td>Su</td>
        </thead>

        <tbody>
          
        </tbody>
      </table>          
    </div>
  </div>
    `;
  }
}

customElements.define('calendar', Calendar);