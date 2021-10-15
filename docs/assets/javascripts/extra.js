function modalImg(imgId) {
  var modal = document.getElementById('modalImage');

  var img = document.getElementById(imgId);
  var modalImg = document.getElementById("image");
  var captionText = document.getElementById("caption");


  modal.style.display = "block";
  modalImg.src = img.src;
  captionText.innerHTML = img.alt;

  // modalImg.className = "modal-content imgAmpli"

  var span = document.getElementsByClassName("close")[0];

  span.onclick = function () {
    modal.className = 'modal modal-off';

    setTimeout(
      function () {
        modal.style.display = 'none';
        modal.className = 'modal';
      }, 580);
  }

  window.onclick = function (event) {
    if (event.target == modal) {
      modal.className = 'modal modal-off';
      setTimeout(
        function () {
          modal.style.display = 'none';
          modal.className = 'modal';
        }, 580);
    }
  }
}

function send() {
  var method = document.getElementById('method').value;
  var data = document.getElementById('data').value;
  var destiny = document.getElementById('destiny').value;

  var cb = function (r) {
    var resultado = document.getElementById('resultado')
    if (r.status == 200) {
      resultado.style.backgroundColor = '#81c784'
    } else {
      resultado.style.backgroundColor = '#ef5350'
    }
    a = 'Resultado: ' + (r.responseText == '' ? 'null' : r.response) + ' ' +
      '\n Status: ' + r.status;
    resultado.innerText = a;
  }

  requestAJAX(destiny, data, method, cb, cb);

}

function requestAJAX(destiny, sendData, method, callbackSuccess, callbackError) {

  var http = new XMLHttpRequest();

  http.open(method, destiny, true);
  if (method != 'GET') {
    http.setRequestHeader('Content-Type', 'application/json');
  }

  http.onreadystatechange = function () {

    if ((typeof callbackSuccess != 'function') && (typeof callbackError != 'function')) {

      if (http.readyState == 4 && http.status == 200) {

        return http.responseText;

      }

    } else {
      if (http.readyState == 4 && http.status == 200) {

        callbackSuccess(http);

      } else {

        callbackError(http);

      }

    }

  }

  if (method == 'GET') {
    http.send();
  } else {
    http.send(JSON.stringify(sendData));
  }
}

function funcoesSelect() {
  var sel = document.getElementById('method');
  switch (sel.value) {
    case 'GET':
      document.getElementById('data').disabled = true;
      break;

    default:
      document.getElementById('data').disabled = false;
      break;
  }
}

function buttonOnOff() {
  if (document.getElementById('destiny').value == '') {
    document.getElementById('buttonSubmit').disabled = true;
  } else {
    document.getElementById('buttonSubmit').disabled = false;
  }
}

function genUrl() {
  var url = document.getElementById('URL').value;
  if (url.indexOf('http') === -1 && url !== '') {
    url = 'https://' + url;
    document.getElementById('URL').value = url;
  }

  var source = document.getElementById('source').value;
  var medium = document.getElementById('medium').value;
  var campaign = document.getElementById('campaign').value;
  var content = document.getElementById('content').value;
  var term = document.getElementById('term').value;

  if (url !== '' && source !== '' && medium !== '' && campaign !== '') {
    url += '?';

    url += 'utm_source=' + encodeURIComponent(source);

    url += '&utm_medium=' + encodeURIComponent(medium);

    url += '&utm_campaign=' + encodeURIComponent(campaign);

    if (term !== '') {
      url += '&utm_term=' + encodeURIComponent(term).replace(' ', '+');
    }

    if (content !== '') {
      url += '&utm_content=' + encodeURIComponent(content);
    }
    var textArea = document.getElementById('url_gerada');
    textArea.value = url;
    // document.getElementById("url_gerada_hidden").value = url;
  } else {
    document.getElementById('url_gerada').value = null;
    // document.getElementById("url_gerada_hidden").value = null;
  }
}

function copyFunction() {
  const el = document.createElement('textarea');
  el.value = document.getElementById('url_gerada').value;
  document.body.appendChild(el);
  el.select();
  document.execCommand('copy');
  document.body.removeChild(el);

  var tooltip = document.getElementById("tooltip");
  tooltip.innerHTML = "URL Copiada!";
}

function outFunc() {
  var tooltip = document.getElementById("tooltip");
  tooltip.innerHTML = "Copiar para a área de transferência";
}

function changeTableColor() {
  const tableCells = document.getElementsByTagName('td');
  for (const key in tableCells) {
    if (Object.hasOwnProperty.call(tableCells, key)) {
      if (tableCells[key].textContent.indexOf('↳') >= 0) {
        // tableCells[key].parentElement.className = 'child-row';
        tableCells[key].style.whiteSpace = 'nowrap';
        if (tableCells[key-4].textContent.indexOf('↳') < 0 && key%4 == 0) {
          // tableCells[key - 4].parentElement.className = 'father-row';
        }
      }
    }
  }
}
changeTableColor();
class Tooltip extends HTMLElement {
  constructor() {
    super();

    const shadow = this.attachShadow({ mode: 'open' });

    const customElement = this;
    const motherDiv = document.createElement('div');
    motherDiv.setAttribute('class', "div-tooltip");
    motherDiv.textContent = customElement.textContent;
    const div = document.createElement('div');
    div.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" height="18px" viewBox="0 0 24 24" width="18px" fill="#E3E3E3"><path d="M0 0h24v24H0z" fill="none"/><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z"/></svg>'
    div.setAttribute('class', 'tooltip');
    const span = document.createElement('span');
    span.setAttribute('class', 'tooltiptext');
    const text = customElement.getAttribute('text');
    span.textContent = text;
    div.appendChild(span);
    motherDiv.appendChild(div);
  
    const style = document.createElement('style');

    style.textContent = /*css*/
      `div.div-tooltip {
        display: flex;
        align-items: center;
        flex-direction: row;
        justify-content: flex-start;
      }

      .tooltip {
        position: relative;
        display: inline-block;
        height: 18px
      }

      .spanTooltip {
        cursor: pointer;
      }

      .tooltip .tooltiptext {
        visibility: hidden;
        width: 140px;
        background-color: #555;
        color: #fff;
        text-align: center;
        border-radius: 6px;
        padding: 5px;
        position: absolute;
        z-index: 1;
        bottom: 150%;
        left: 50%;
        margin-left: -75px;
        opacity: 0;
        transition: opacity 0.3s;
      }

      .tooltip .tooltiptext::after {
        content: "";
        position: absolute;
        top: 100%;
        left: 50%;
        margin-left: -5px;
        border-width: 5px;
        border-style: solid;
        border-color: #555 transparent transparent transparent;
      }

      .tooltip:hover .tooltiptext {
        visibility: visible;
        opacity: 1;
      }`;

    shadow.appendChild(style);
    shadow.appendChild(motherDiv);
  }
}

customElements.define('rb-tooltip', Tooltip);