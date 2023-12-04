var firsttable;
var secondtable;
$(document).ready(function () {
   firsttable= $('#firstTable').DataTable( {
    ajax: {
        url: 'http://localhost:8080/customerdata',
        dataSrc : '',
    },
        columns: [
              { data: 'iduser' },
              { data: 'surname' },
              { data: 'name' },
              { data: 'date_of_birth' },
              { data: 'address' },
              { data: 'phone_number' }
            ]
        });
    secondtable = $('#secondTable').DataTable( {
      destroy: true,
      ajax: {
          url: 'http://localhost:8080/operationdata',
          dataSrc : '',
      },
          columns: [
                { data: 'id_operation' },
                { data: 'operation_type' },
                { data: 'date' },
                { data: 'value' },
                { data: 'operation_subtype' },
                { data: 'workerName' },
                { data: 'customerName' }
              ]
          })

});

var removeswitch = 0;
function add(){
  document.getElementById("remove").style.visibility = "hidden";
  document.getElementById("customerDelete").style.visibility = "hidden";
  document.getElementById("operationDelete").style.visibility = "hidden";

  document.getElementById("customerAdd").style.visibility = "visible";
  document.getElementById("operationAdd").style.visibility = "visible";

}

function customerAdd(){
  document.getElementById("addoperation").style.visibility = "hidden";
  document.getElementById("addcustomer").style.visibility = "visible";
}

function operationAdd(){
  document.getElementById("addcustomer").style.visibility = "hidden";
  document.getElementById("addoperation").style.visibility = "visible";
}

function operationSend(){
  var xhr = new XMLHttpRequest();
  var url = "http://localhost:8080/operationAdd";
  xhr.open("POST", url, true);
  xhr.setRequestHeader("Content-Type", "application/json");
  xhr.onreadystatechange = function () {
    if (xhr.readyState === 4 && xhr.status === 200) {
        var json = JSON.parse(xhr.responseText);
        console.log(json.surname + ", " + json.name+", "+ json.date_of_birth +", "+ json.address +", "+ json.phone_number);
    }
  };
  var data = JSON.stringify({
  "operation_type": document.getElementById("operation_type").value,
  "date": document.getElementById("date").value,
  "value": document.getElementById("value").value,
  "operation_subtype": document.getElementById("operation_subtype").value,
  "id_worker": document.getElementById("id_worker").value,
  "id_customer": document.getElementById("id_customer").value});
  
  xhr.send(data);
  setTimeout(function(){
    secondtable.ajax.reload();
}, 2000);
}
function customerSend(){
  var xhr = new XMLHttpRequest();
  var url = "http://localhost:8080/customerAdd";
  xhr.open("POST", url, true);
  xhr.setRequestHeader("Content-Type", "application/json");
  xhr.onreadystatechange = function () {
    if (xhr.readyState === 4 && xhr.status === 200) {
        var json = JSON.parse(xhr.responseText);
        console.log(json.surname + ", " + json.name+", "+ json.date_of_birth +", "+ json.address +", "+ json.phone_number);
    }
  };
  var data = JSON.stringify({
  "surname": document.getElementById("surname").value,
  "name": document.getElementById("name").value,
  "date_of_birth": document.getElementById("date_of_birth").value,
  "address": document.getElementById("address").value,
  "phone_number": document.getElementById("phone_number").value});
  
  xhr.send(data);
  setTimeout(function(){
    firsttable.ajax.reload();
}, 2000);
}

function remove(){
  document.getElementById("addoperation").style.visibility = "hidden";
  document.getElementById("addcustomer").style.visibility = "hidden";

  document.getElementById("customerAdd").style.visibility = "hidden";
  document.getElementById("operationAdd").style.visibility = "hidden";

  document.getElementById("customerDelete").style.visibility = "visible";
  document.getElementById("operationDelete").style.visibility = "visible";

}

function customerRemove(){
  document.getElementById("remove").style.visibility = "visible";
  document.getElementById("deleteconfirm").innerHTML = "Delete Customer";
  removeswitch = 0;
}
function operationRemove(){
  document.getElementById("remove").style.visibility = "visible";
  document.getElementById("deleteconfirm").innerHTML = "Delete Operation";
  removeswitch = 1;
}

function removeOpCS(){
  if(removeswitch == 0){
    var id = document.getElementById("id").value;
    fetch('http://localhost:8080/customerRemove/' + id, {
    method: 'DELETE',})
    setTimeout(function(){
      firsttable.ajax.reload();
  }, 2000);
  }
  else{
    var id = document.getElementById("id").value;
    fetch('http://localhost:8080/operationRemove/' + id, {
    method: 'DELETE',})
    setTimeout(function(){
      secondtable.ajax.reload();
  }, 2000);
  }
}