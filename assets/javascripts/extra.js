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
        tableCells[key].parentElement.className = 'child-row';
        if (tableCells[key-1].textContent.indexOf('↳') < 0) {
          tableCells[key-1].parentElement.className = 'father-row';
        }
      }
    }
  }
}