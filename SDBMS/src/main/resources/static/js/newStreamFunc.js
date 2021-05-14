// let btnSubmit = document.getElementById('btn-submit');
// let btnAddAttr = document.getElementById('btn-add-attr');
// let btnAddQuery = document.getElementById('btn-add-query');
// let attributeParentDiv = document.getElementById('attributes-parent-div');
// let queryParentDiv = document.getElementById('queries-parent-div');
// let numAttributeElements = 1;
// let numQueryElements = 0;
// let elementsArray = [];
//
//
//
// function getQueryElement(){
//     let row = document.createElement('div');
//     row.classList.add('row');
//     row.setAttribute('id', 'row-query-' + numQueryElements);
//     row.style.backgroundColor = '#a2a2a259';
//     row.style.borderRadius = '4px';
//     row.style.borderBottom = '1px';
//     row.style.borderBottomColor = 'black';
//     row.style.marginBottom = '0.15rem';
//
//     let col1 = document.createElement('div');
//     col1.setAttribute('class', 'col-md-9');
//     col1.classList.add('py-3');
//
//     let col2 = document.createElement('div');
//     col2.setAttribute('class', 'col-md-3');
//     col2.classList.add('text-center', 'py-3', 'my-auto');
//
//     let textArea = document.createElement('textarea');
//     textArea.setAttribute('id','textarea-'+numQueryElements);
//     textArea.setAttribute('rows','3');
//     textArea.style.width = '45%';
//
//     col1.appendChild(textArea);
//
//     let removeButton = document.createElement('button');
//     removeButton.setAttribute('id', 'btnquery-' + numQueryElements);
//     // removeButton.classList.add('btn', 'btn-default', 'btn-sm');
//     removeButton.innerHTML='<span class="glyphicon glyphicon-remove"></span> Remove';
//     removeButton.addEventListener('click', async (mouseEvent) => {
//         let childId = mouseEvent.target.id.split("-")[1];
//         queryParentDiv.removeChild(document.getElementById('row-query-' + childId));
//     });
//
//     col2.appendChild(removeButton);
//
//     row.appendChild(col1);
//     row.appendChild(col2);
//
//     return row;
// }
// function getAttributeElement() {
//     let row = document.createElement('div');
//     row.classList.add('row');
//     row.setAttribute('id', 'row-attr-' + numAttributeElements);
//     row.style.backgroundColor = '#a2a2a259';
//     row.style.borderRadius = '4px';
//     row.style.borderBottom = '1px';
//     row.style.borderBottomColor = 'black';
//     row.style.marginBottom = '0.15rem';
//
//     let col1 = document.createElement('div');
//     col1.setAttribute('class', 'col-md-9');
//     col1.classList.add('py-3');
//
//     let col2 = document.createElement('div');
//     col2.setAttribute('class', 'col-md-3');
//     col2.classList.add('text-center', 'py-3');
//
//     let inputText = document.createElement('input');
//     inputText.setAttribute('type', 'text');
//     inputText.setAttribute('id', 'Name-Id-' + numAttributeElements);
//     inputText.setAttribute('name', 'Name-' + numAttributeElements);
//     inputText.setAttribute('placeholder', 'Element Name ...');
//     inputText.style.width = '45%';
//
//     col1.appendChild(inputText);
//
//     let removeButton = document.createElement('button');
//     removeButton.setAttribute('id', 'btnattr-' + numAttributeElements);
//     // removeButton.classList.add('btn', 'btn-default', 'btn-sm');
//     removeButton.innerHTML='<span class="glyphicon glyphicon-remove"></span> Remove';
//     removeButton.addEventListener('click', async (mouseEvent) => {
//         let childId = mouseEvent.target.id.split("-")[1];
//         attributeParentDiv.removeChild(document.getElementById('row-attr-' + childId));
//     });
//     col2.appendChild(removeButton);
//
//     row.appendChild(col1);
//     row.appendChild(col2);
//
//     return row;
// }
//
// window.onload = function() {
//     attributeParentDiv.appendChild(getAttributeElement());
//     // attributeParentDiv.insertBefore(document.createElement('hr'), document.getElementById('last-row-attribute'));
// }
//
// btnAddAttr.addEventListener('click', async function(event) {
//     numAttributeElements++;
//     attributeParentDiv.appendChild(getAttributeElement());
//     // attributeParentDiv.insertBefore(document.createElement('hr'), document.getElementById('last-row-attribute'));
// });
//
// btnAddQuery.addEventListener('click',async function(){
//     numQueryElements++;
//     console.log("btnAddQuery");
//     queryParentDiv.appendChild(getQueryElement());
// });
//
// btnSubmit.addEventListener('click', async function(event) {
//     if(attributeParentDiv.children.length === 0) {
//         console.log('Invalid Request');
//     }
//     else {
//         let i;
//         let elementsArray = [];
//         let queries=[];
//
//         let length = attributeParentDiv.children.length;
//
//         for(i = 0; i < length; i++) {
//             let name = attributeParentDiv.children[i].children[0].children[0].value;
//             let data = {};
//             data['name'] = name;
//             elementsArray.push(data);
//         }
//
//         length = queryParentDiv.children.length;
//
//         for(i = 0; i < length; i++) {
//             let query = queryParentDiv.children[i].children[0].children[0].value;
//             let data={};
//             data["query"] = query;
//             queries.push(data);
//         }
//
//         let json_data = {};
//         json_data['stream_name'] = document.getElementById('streamName').value;
//         json_data['data_src'] = document.getElementById('dataSrc').value;
//         json_data['window_size'] = document.getElementById('windowSize').value;
//         json_data['window_type'] = document.getElementById('windowType').value;
//         json_data['velocity'] = document.getElementById('velocity').value;
//         json_data['elementsArray'] = elementsArray;
//         json_data['queries'] = queries;
//
//         console.log(json_data);
//
//         axios
//             .post('/newStreamDetails', {
//                 "json_data" : JSON.stringify(json_data)
//             })
//             .then(response => {
//             document.getElementById("userProfileForm").submit();
//         })
//             .catch(error=> {
//                 console.log("error")
//                 document.getElementById("incorrectCred").innerText = "Incorrect username/password";
//             });
//     }
// });


// let btnSubmit = document.getElementById('btn-submit');
// let btnAddAttr = document.getElementById('btn-add-attr');
// let btnAddQuery = document.getElementById('btn-add-query');
// let attributeParentDiv = document.getElementById('attributes-parent-div');
// let queryParentDiv = document.getElementById('queries-parent-div');
// let numAttributeElements = 1;
// let numAttrReqElements = 0;
// let numQueryElements = 0;
// let elementsArray = [];
//
//
// let btnAddAttrReq = document.getElementById('btn-add-attr-req');
// let attrReqParentDiv = document.getElementById('attr-req-parent-div');
//
//
// function getQueryElement(){
//     let row = document.createElement('div');
//     row.classList.add('row');
//     row.setAttribute('id', 'row-query-' + numQueryElements);
//     row.style.backgroundColor = '#a2a2a259';
//     row.style.borderRadius = '4px';
//     row.style.borderBottom = '1px';
//     row.style.borderBottomColor = 'black';
//     row.style.marginBottom = '0.15rem';
//
//     let col1 = document.createElement('div');
//     col1.setAttribute('class', 'col-md-9');
//     col1.classList.add('py-3');
//
//     let col2 = document.createElement('div');
//     col2.setAttribute('class', 'col-md-3');
//     col2.classList.add('text-center', 'py-3', 'my-auto');
//
//     let textArea = document.createElement('textarea');
//     textArea.setAttribute('id','textarea-'+numQueryElements);
//     textArea.setAttribute('rows','3');
//     textArea.style.width = '45%';
//
//     col1.appendChild(textArea);
//
//     let removeButton = document.createElement('button');
//     removeButton.setAttribute('id', 'btnquery-' + numQueryElements);
//     // removeButton.classList.add('btn', 'btn-default', 'btn-sm');
//     removeButton.innerHTML='<span class="glyphicon glyphicon-remove"></span> Remove';
//     removeButton.addEventListener('click', async (mouseEvent) => {
//         let childId = mouseEvent.target.id.split("-")[1];
//         queryParentDiv.removeChild(document.getElementById('row-query-' + childId));
//     });
//
//     col2.appendChild(removeButton);
//
//     row.appendChild(col1);
//     row.appendChild(col2);
//
//     return row;
// }
//
//
// function getAttributeElement() {
//     let row = document.createElement('div');
//     row.classList.add('row');
//     row.setAttribute('id', 'row-attr-' + numAttributeElements);
//     row.style.backgroundColor = '#a2a2a259';
//     row.style.borderRadius = '4px';
//     row.style.borderBottom = '1px';
//     row.style.borderBottomColor = 'black';
//     row.style.marginBottom = '0.15rem';
//
//     let col1 = document.createElement('div');
//     col1.setAttribute('class', 'col-md-9');
//     col1.classList.add('py-3');
//
//     let col2 = document.createElement('div');
//     col2.setAttribute('class', 'col-md-3');
//     col2.classList.add('text-center', 'py-3');
//
//     let inputText = document.createElement('input');
//     inputText.setAttribute('type', 'text');
//     inputText.setAttribute('id', 'Name-Id-' + numAttributeElements);
//     inputText.setAttribute('name', 'Name-' + numAttributeElements);
//     inputText.setAttribute('placeholder', 'Element Name ...');
//     inputText.style.width = '45%';
//
//     col1.appendChild(inputText);
//
//     let removeButton = document.createElement('button');
//     removeButton.setAttribute('id', 'btnattr-' + numAttributeElements);
//     // removeButton.classList.add('btn', 'btn-default', 'btn-sm');
//     removeButton.innerHTML='<span class="glyphicon glyphicon-remove"></span> Remove';
//     removeButton.addEventListener('click', async (mouseEvent) => {
//         let childId = mouseEvent.target.id.split("-")[1];
//         attributeParentDiv.removeChild(document.getElementById('row-attr-' + childId));
//     });
//     col2.appendChild(removeButton);
//
//     row.appendChild(col1);
//     row.appendChild(col2);
//
//     return row;
// }
//
//
// function getAttrReqElement() {
//     let row = document.createElement('div');
//     row.classList.add('row');
//     row.setAttribute('id', 'row-attr-req-' + numAttrReqElements);
//     row.style.backgroundColor = '#a2a2a259';
//     row.style.borderRadius = '4px';
//     row.style.borderBottom = '1px';
//     row.style.borderBottomColor = 'black';
//     row.style.marginBottom = '0.15rem';
//
//     let col1 = document.createElement('div');
//     col1.setAttribute('class', 'col-md-9');
//     col1.classList.add('py-3');
//
//     let col2 = document.createElement('div');
//     col2.setAttribute('class', 'col-md-3');
//     col2.classList.add('text-center', 'py-3');
//
//     let inputText = document.createElement('input');
//     inputText.setAttribute('type', 'text');
//     inputText.setAttribute('id', 'Name-Id-' + numAttrReqElements);
//     inputText.setAttribute('name', 'Name-' + numAttrReqElements);
//     inputText.setAttribute('placeholder', 'Element Name ...');
//     inputText.style.width = '45%';
//
//     col1.appendChild(inputText);
//
//     let removeButton = document.createElement('button');
//     removeButton.setAttribute('id', 'btnattrReq-' + numAttrReqElements);
//     // removeButton.classList.add('btn', 'btn-default', 'btn-sm');
//     removeButton.innerHTML='<span class="glyphicon glyphicon-remove"></span> Remove';
//     removeButton.addEventListener('click', async (mouseEvent) => {
//         let childId = mouseEvent.target.id.split("-")[1];
//         attrReqParentDiv.removeChild(document.getElementById('row-attr-req-' + childId));
//     });
//     col2.appendChild(removeButton);
//
//     row.appendChild(col1);
//     row.appendChild(col2);
//
//     return row;
// }
//
//
//
// window.onload = function() {
//     attributeParentDiv.appendChild(getAttributeElement());
//     // attributeParentDiv.insertBefore(document.createElement('hr'), document.getElementById('last-row-attribute'));
// }
//
// btnAddAttr.addEventListener('click', async function(event) {
//     numAttributeElements++;
//     attributeParentDiv.appendChild(getAttributeElement());
//     // attributeParentDiv.insertBefore(document.createElement('hr'), document.getElementById('last-row-attribute'));
// });
//
// btnAddQuery.addEventListener('click',async function(){
//     numQueryElements++;
//     console.log("btnAddQuery");
//     queryParentDiv.appendChild(getQueryElement());
// });
//
// btnAddAttrReq.addEventListener('click',async function(){
//     numAttrReqElements++;
//     console.log("btnAddAttrReq");
//     attrReqParentDiv.appendChild(getAttrReqElement());
// });
//
//
// btnSubmit.addEventListener('click', async function(event) {
//     if(attributeParentDiv.children.length === 0) {
//         console.log('Invalid Request');
//     }
//     else {
//         let i;
//         let elementsArray = [];
//         let queries=[];
//         let elementsReqArray = [];
//
//         let length = attributeParentDiv.children.length;
//
//         for(i = 0; i < length; i++) {
//             let name = attributeParentDiv.children[i].children[0].children[0].value;
//             let data = {};
//             data['name'] = name;
//             elementsArray.push(data);
//         }
//
//         length = queryParentDiv.children.length;
//
//         for(i = 0; i < length; i++) {
//             let query = queryParentDiv.children[i].children[0].children[0].value;
//             let data={};
//             data["query"] = query;
//             queries.push(data);
//         }
//
//         length = attrReqParentDiv.children.length;
//
//         for(i = 0 ; i < length; i++) {
//             let attrReq = attrReqParentDiv.children[i].children[0].children[0].value;
//             let data = {};
//             data['attrReq'] = attrReq;
//             elementsReqArray.push(data);
//         }
//
//         let json_data = {};
//         json_data['stream_name'] = document.getElementById('streamName').value;
//         json_data['data_src'] = document.getElementById('dataSrc').value;
//         json_data['window_size'] = document.getElementById('windowSize').value;
//         json_data['window_type'] = document.getElementById('windowType').value;
//         json_data['velocity'] = document.getElementById('velocity').value;
//         json_data['elementsArray'] = elementsArray;
//         json_data['queries'] = queries;
//         json_data['elementsReqArray'] = elementsReqArray;
//
//         console.log(json_data);
//
//         axios
//             .post('/newStreamDetails', {
//                 "json_data" : JSON.stringify(json_data)
//             })
//             .then(response => {
//                 document.getElementById("userProfileForm").submit();
//             })
//             .catch(error=> {
//                 console.log("error")
//                 document.getElementById("incorrectCred").innerText = "Incorrect username/password";
//             });
//     }
// });

//
// let btnSubmit = document.getElementById('btn-submit');
// let btnAddAttr = document.getElementById('btn-add-attr');
// let btnAddQuery = document.getElementById('btn-add-query');
// let attributeParentDiv = document.getElementById('attributes-parent-div');
// let queryParentDiv = document.getElementById('queries-parent-div');
// let numAttributeElements = 1;
// let numAttrReqElements = 0;
// let numQueryElements = 0;
// let elementsArray = [];
//
// let numDataTypes = 1;
// let attrDataTypeParentDiv = document.getElementById('data-type-parent-div');
//
// let btnAddAttrReq = document.getElementById('btn-add-attr-req');
// let attrReqParentDiv = document.getElementById('attr-req-parent-div');
//
//
// function getQueryElement(){
//     let row = document.createElement('div');
//     row.classList.add('row');
//     row.setAttribute('id', 'row-query-' + numQueryElements);
//     row.style.backgroundColor = '#a2a2a259';
//     row.style.borderRadius = '4px';
//     row.style.borderBottom = '1px';
//     row.style.borderBottomColor = 'black';
//     row.style.marginBottom = '0.15rem';
//
//     let col1 = document.createElement('div');
//     col1.setAttribute('class', 'col-md-9');
//     col1.classList.add('py-3');
//
//     let col2 = document.createElement('div');
//     col2.setAttribute('class', 'col-md-3');
//     col2.classList.add('text-center', 'py-3', 'my-auto');
//
//     let textArea = document.createElement('textarea');
//     textArea.setAttribute('id','textarea-'+numQueryElements);
//     textArea.setAttribute('rows','3');
//     textArea.style.width = '45%';
//
//     col1.appendChild(textArea);
//
//     let removeButton = document.createElement('button');
//     removeButton.setAttribute('id', 'btnquery-' + numQueryElements);
//     // removeButton.classList.add('btn', 'btn-default', 'btn-sm');
//     removeButton.innerHTML='<span class="glyphicon glyphicon-remove"></span> Remove';
//     removeButton.addEventListener('click', async (mouseEvent) => {
//         let childId = mouseEvent.target.id.split("-")[1];
//         queryParentDiv.removeChild(document.getElementById('row-query-' + childId));
//     });
//
//     col2.appendChild(removeButton);
//
//     row.appendChild(col1);
//     row.appendChild(col2);
//
//     return row;
// }
//
//
// function getAttributeElement() {
//     let row = document.createElement('div');
//     row.classList.add('row');
//     row.setAttribute('id', 'row-attr-' + numAttributeElements);
//     row.style.backgroundColor = '#a2a2a259';
//     row.style.borderRadius = '4px';
//     row.style.borderBottom = '1px';
//     row.style.borderBottomColor = 'black';
//     row.style.marginBottom = '0.15rem';
//
//     let col1 = document.createElement('div');
//     col1.setAttribute('class', 'col-md-9');
//     col1.classList.add('py-3');
//
//     let col2 = document.createElement('div');
//     col2.setAttribute('class', 'col-md-3');
//     col2.classList.add('text-center', 'py-3');
//
//     let inputText = document.createElement('input');
//     inputText.setAttribute('type', 'text');
//     inputText.setAttribute('id', 'Name-Id-' + numAttributeElements);
//     inputText.setAttribute('name', 'Name-' + numAttributeElements);
//     inputText.setAttribute('placeholder', 'Element Name ...');
//     inputText.style.width = '45%';
//
//     col1.appendChild(inputText);
//
//     let removeButton = document.createElement('button');
//     removeButton.setAttribute('id', 'btnattr-' + numAttributeElements);
//     // removeButton.classList.add('btn', 'btn-default', 'btn-sm');
//     removeButton.innerHTML='<span class="glyphicon glyphicon-remove"></span> Remove';
//     removeButton.addEventListener('click', async (mouseEvent) => {
//         let childId = mouseEvent.target.id.split("-")[1];
//         attributeParentDiv.removeChild(document.getElementById('row-attr-' + childId));
//         attrDataTypeParentDiv.removeChild(document.getElementById('row-data-type-' + childId));
//     });
//     col2.appendChild(removeButton);
//
//     row.appendChild(col1);
//     row.appendChild(col2);
//
//     return row;
// }
//
// function getDataTypeElement() {
//
//     let row = document.createElement('div');
//     row.classList.add('row');
//     row.setAttribute('id', 'row-data-type-' + numDataTypes);
//     row.style.backgroundColor = '#a2a2a259';
//     row.style.borderRadius = '4px';
//     row.style.borderBottom = '1px';
//     row.style.borderBottomColor = 'black';
//     row.style.marginBottom = '0.15rem';
//
//     let col1 = document.createElement('div');
//     col1.setAttribute('class', 'col-md-9');
//     col1.classList.add('py-3');
//
//     let col2 = document.createElement('div');
//     col2.setAttribute('class', 'col-md-3');
//     col2.classList.add('text-center', 'py-3');
//
//     let inputText = document.createElement('input');
//     inputText.setAttribute('type', 'text');
//     inputText.setAttribute('id', 'Name-Id-' + numDataTypes);
//     inputText.setAttribute('name', 'Name-' + numDataTypes);
//     inputText.setAttribute('placeholder', 'Data Type ...');
//     inputText.style.width = '45%';
//
//     col1.appendChild(inputText);
//
//     // let removeButton = document.createElement('button');
//     // removeButton.setAttribute('id', 'btnattr-' + numDataTypes);
//     // // removeButton.classList.add('btn', 'btn-default', 'btn-sm');
//     // removeButton.innerHTML='<span class="glyphicon glyphicon-remove"></span> Remove';
//     // removeButton.addEventListener('click', async (mouseEvent) => {
//     //     let childId = mouseEvent.target.id.split("-")[1];
//     //     attributeParentDiv.removeChild(document.getElementById('row-attr-' + childId));
//     // });
//     // col2.appendChild(removeButton);
//
//     row.appendChild(col1);
//     // row.appendChild(col2);
//
//     return row;
//
// }
//
// function getAttrReqElement() {
//     let row = document.createElement('div');
//     row.classList.add('row');
//     row.setAttribute('id', 'row-attr-req-' + numAttrReqElements);
//     row.style.backgroundColor = '#a2a2a259';
//     row.style.borderRadius = '4px';
//     row.style.borderBottom = '1px';
//     row.style.borderBottomColor = 'black';
//     row.style.marginBottom = '0.15rem';
//
//     let col1 = document.createElement('div');
//     col1.setAttribute('class', 'col-md-9');
//     col1.classList.add('py-3');
//
//     let col2 = document.createElement('div');
//     col2.setAttribute('class', 'col-md-3');
//     col2.classList.add('text-center', 'py-3');
//
//     let inputText = document.createElement('input');
//     inputText.setAttribute('type', 'text');
//     inputText.setAttribute('id', 'Name-Id-' + numAttrReqElements);
//     inputText.setAttribute('name', 'Name-' + numAttrReqElements);
//     inputText.setAttribute('placeholder', 'Element Name ...');
//     inputText.style.width = '45%';
//
//     col1.appendChild(inputText);
//
//     let removeButton = document.createElement('button');
//     removeButton.setAttribute('id', 'btnattrReq-' + numAttrReqElements);
//     // removeButton.classList.add('btn', 'btn-default', 'btn-sm');
//     removeButton.innerHTML='<span class="glyphicon glyphicon-remove"></span> Remove';
//     removeButton.addEventListener('click', async (mouseEvent) => {
//         let childId = mouseEvent.target.id.split("-")[1];
//         attrReqParentDiv.removeChild(document.getElementById('row-attr-req-' + childId));
//     });
//     col2.appendChild(removeButton);
//
//     row.appendChild(col1);
//     row.appendChild(col2);
//
//     return row;
// }
//
//
//
//
// window.onload = function() {
//     attributeParentDiv.appendChild(getAttributeElement());
//     attrDataTypeParentDiv.appendChild(getDataTypeElement());
//     // attributeParentDiv.insertBefore(document.createElement('hr'), document.getElementById('last-row-attribute'));
// }
//
// btnAddAttr.addEventListener('click', async function(event) {
//     numAttributeElements++;
//     numDataTypes++;
//     attributeParentDiv.appendChild(getAttributeElement());
//     attrDataTypeParentDiv.appendChild(getDataTypeElement());
//     // attributeParentDiv.insertBefore(document.createElement('hr'), document.getElementById('last-row-attribute'));
// });
//
// btnAddQuery.addEventListener('click',async function(){
//     numQueryElements++;
//     console.log("btnAddQuery");
//     queryParentDiv.appendChild(getQueryElement());
// });
//
// btnAddAttrReq.addEventListener('click',async function(){
//     numAttrReqElements++;
//     console.log("btnAddAttrReq");
//     attrReqParentDiv.appendChild(getAttrReqElement());
// });
//
//
// btnSubmit.addEventListener('click', async function(event) {
//     if(attributeParentDiv.children.length === 0) {
//         console.log('Invalid Request');
//     }
//     else {
//         let i;
//         let elementsArray = [];
//         let queries=[];
//         let elementsReqArray = [];
//         let dataTypeArray = [];
//
//         let length = attributeParentDiv.children.length;
//
//         for(i = 0; i < length; i++) {
//             let name = attributeParentDiv.children[i].children[0].children[0].value;
//             let data = {};
//             // data['name'] = name;
//             // elementsArray.push(data);
//             elementsArray.push(name);
//         }
//
//         length = queryParentDiv.children.length;
//
//         for(i = 0; i < length; i++) {
//             let query = queryParentDiv.children[i].children[0].children[0].value;
//             let data={};
//             // data["query"] = query;
//             // queries.push(data);
//             queries.push(query);
//         }
//
//         length = attrReqParentDiv.children.length;
//
//         for(i = 0 ; i < length; i++) {
//             let attrReq = attrReqParentDiv.children[i].children[0].children[0].value;
//             let data = {};
//             // data['attrReq'] = attrReq;
//             elementsReqArray.push(attrReq);
//         }
//
//         length = attrDataTypeParentDiv.children.length;
//
//         for(i = 0 ; i < length; i++) {
//             let dataAttr = attrDataTypeParentDiv.children[i].children[0].children[0].value;
//             let data = {};
//             // data['dataType'] = dataAttr;
//             // dataTypeArray.push(data);
//             dataTypeArray.push(dataAttr);
//         }
//
//         let json_data = {};
//         json_data['stream_name'] = document.getElementById('streamName').value;
//         json_data['data_src'] = document.getElementById('dataSrc').value;
//         json_data['data_file_src'] = document.getElementById('dataSrcFile').value;
//         json_data['window_size'] = document.getElementById('windowSize').value;
//         json_data['window_type'] = document.getElementById('windowType').value;
//         json_data['velocity'] = document.getElementById('velocity').value;
//         json_data['elementsArray'] = elementsArray;
//         json_data['queries'] = queries;
//         json_data['elementsReqArray'] = elementsReqArray;
//         json_data['dataTypeArray'] = dataTypeArray;
//
//         console.log(json_data);
//
//         axios
//             .post('/newStreamDetails', {
//                 "json_data" : JSON.stringify(json_data)
//             })
//             .then(response => {
//                 document.getElementById("userProfileForm").submit();
//             })
//             .catch(error=> {
//                 console.log("error")
//                 document.getElementById("incorrectCred").innerText = "Incorrect username/password";
//             });
//     }
// });



let btnSubmit = document.getElementById('btn-submit');
let btnAddAttr = document.getElementById('btn-add-attr');
let btnAddQuery = document.getElementById('btn-add-query');
let attributeParentDiv = document.getElementById('attributes-parent-div');
let queryParentDiv = document.getElementById('queries-parent-div');
let numAttributeElements = 1;
//let numAttrReqElements = 0;
let numQueryElements = 0;
let elementsArray = [];

//let numDataTypes = 1;
//let attrDataTypeParentDiv = document.getElementById('data-type-parent-div');

//let btnAddAttrReq = document.getElementById('btn-add-attr-req');
//let attrReqParentDiv = document.getElementById('attr-req-parent-div');


function getQueryElement(){
    let row = document.createElement('div');
    row.classList.add('row');
    row.setAttribute('id', 'row-query-' + numQueryElements);
    row.style.backgroundColor = '#a2a2a259';
    row.style.borderRadius = '4px';
    row.style.borderBottom = '1px';
    row.style.borderBottomColor = 'black';
    row.style.marginBottom = '0.15rem';

    let col1 = document.createElement('div');
    col1.setAttribute('class', 'col-md-9');
    col1.classList.add('py-3');

    let col2 = document.createElement('div');
    col2.setAttribute('class', 'col-md-3');
    col2.classList.add('text-center', 'py-3', 'my-auto');

    let textArea = document.createElement('textarea');
    textArea.setAttribute('id','textarea-'+numQueryElements);
    textArea.setAttribute('rows','3');
    textArea.style.width = '45%';

    col1.appendChild(textArea);

    let removeButton = document.createElement('button');
    removeButton.setAttribute('id', 'btnquery-' + numQueryElements);
    // removeButton.classList.add('btn', 'btn-default', 'btn-sm');
    removeButton.innerHTML='<span class="glyphicon glyphicon-remove"></span> Remove';
    removeButton.addEventListener('click', async (mouseEvent) => {
        let childId = mouseEvent.target.id.split("-")[1];
        queryParentDiv.removeChild(document.getElementById('row-query-' + childId));
    });

    col2.appendChild(removeButton);

    row.appendChild(col1);
    row.appendChild(col2);

    return row;
}


function getAttributeElement() {
    let row = document.createElement('div');
    row.classList.add('row');
    row.setAttribute('id', 'row-attr-' + numAttributeElements);
    row.style.backgroundColor = '#a2a2a259';
    row.style.borderRadius = '4px';
    row.style.borderBottom = '1px';
    row.style.borderBottomColor = 'black';
    row.style.marginBottom = '0.15rem';

    let col1 = document.createElement('div');
    col1.setAttribute('class', 'col-md-1');
    col1.classList.add('text-center', 'py-3');

    let col2 = document.createElement('div');
    col2.setAttribute('class', 'col-md-6');
    col2.classList.add('text-center', 'py-3');

    let col3 = document.createElement('div');
    col3.setAttribute('class', 'col-md-3');
    col3.classList.add('text-center', 'py-3');

    let col4 = document.createElement('div');
    col4.setAttribute('class', 'col-md-2');
    col4.classList.add('text-center', 'py-3');

    let checkbox = document.createElement('input');
    checkbox.setAttribute('type','checkbox');
    checkbox.setAttribute('id','Check-Id-'+ numAttributeElements);
    checkbox.setAttribute('name','Check-' + numAttributeElements);
    col1.appendChild(checkbox);


    let inputText = document.createElement('input');
    inputText.setAttribute('type', 'text');
    inputText.setAttribute('id', 'Name-Id-' + numAttributeElements);
    inputText.setAttribute('name', 'Name-' + numAttributeElements);
    inputText.setAttribute('placeholder', 'Element Name ...');
    inputText.style.width = '50%';
    col2.appendChild(inputText);


    let select = document.createElement("select");
    select.setAttribute('id','Select-Id-' + numAttributeElements);
    select.setAttribute('name','Select-' + numAttributeElements);
    let datatypes = ["VARCHAR(255)","INT","FLOAT","DOUBLE"] ;
    for (const val of datatypes)
    {
        let option = document.createElement("option");
        option.value = val;
        option.text = val;
        select.appendChild(option);
    }
    col3.appendChild(select);


    let removeButton = document.createElement('button');
    removeButton.setAttribute('id', 'btnattr-' + numAttributeElements);
    // removeButton.classList.add('btn', 'btn-default', 'btn-sm');
    removeButton.innerHTML='<span class="glyphicon glyphicon-remove"></span> Remove';
    removeButton.addEventListener('click', async (mouseEvent) => {
        let childId = mouseEvent.target.id.split("-")[1];
        attributeParentDiv.removeChild(document.getElementById('row-attr-' + childId));
    });
    col4.appendChild(removeButton);

    row.appendChild(col1);
    row.appendChild(col2);
    row.appendChild(col3);
    row.appendChild(col4);

    return row;
}

// function getDataTypeElement() {
//
//     let row = document.createElement('div');
//     row.classList.add('row');
//     row.setAttribute('id', 'row-data-type-' + numDataTypes);
//     row.style.backgroundColor = '#a2a2a259';
//     row.style.borderRadius = '4px';
//     row.style.borderBottom = '1px';
//     row.style.borderBottomColor = 'black';
//     row.style.marginBottom = '0.15rem';
//
//     let col1 = document.createElement('div');
//     col1.setAttribute('class', 'col-md-9');
//     col1.classList.add('py-3');
//
//     let col2 = document.createElement('div');
//     col2.setAttribute('class', 'col-md-3');
//     col2.classList.add('text-center', 'py-3');
//
//     let inputText = document.createElement('input');
//     inputText.setAttribute('type', 'text');
//     inputText.setAttribute('id', 'Name-Id-' + numDataTypes);
//     inputText.setAttribute('name', 'Name-' + numDataTypes);
//     inputText.setAttribute('placeholder', 'Data Type ...');
//     inputText.style.width = '45%';
//
//     col1.appendChild(inputText);
//     row.appendChild(col1);
//
//     return row;
//
// }

// function getAttrReqElement() {
//     let row = document.createElement('div');
//     row.classList.add('row');
//     row.setAttribute('id', 'row-attr-req-' + numAttrReqElements);
//     row.style.backgroundColor = '#a2a2a259';
//     row.style.borderRadius = '4px';
//     row.style.borderBottom = '1px';
//     row.style.borderBottomColor = 'black';
//     row.style.marginBottom = '0.15rem';
//
//     let col1 = document.createElement('div');
//     col1.setAttribute('class', 'col-md-9');
//     col1.classList.add('py-3');
//
//     let col2 = document.createElement('div');
//     col2.setAttribute('class', 'col-md-3');
//     col2.classList.add('text-center', 'py-3');
//
//     let inputText = document.createElement('input');
//     inputText.setAttribute('type', 'text');
//     inputText.setAttribute('id', 'Name-Id-' + numAttrReqElements);
//     inputText.setAttribute('name', 'Name-' + numAttrReqElements);
//     inputText.setAttribute('placeholder', 'Element Name ...');
//     inputText.style.width = '45%';
//
//     col1.appendChild(inputText);
//
//     let removeButton = document.createElement('button');
//     removeButton.setAttribute('id', 'btnattrReq-' + numAttrReqElements);
//     // removeButton.classList.add('btn', 'btn-default', 'btn-sm');
//     removeButton.innerHTML='<span class="glyphicon glyphicon-remove"></span> Remove';
//     removeButton.addEventListener('click', async (mouseEvent) => {
//         let childId = mouseEvent.target.id.split("-")[1];
//         attrReqParentDiv.removeChild(document.getElementById('row-attr-req-' + childId));
//         attrDataTypeParentDiv.removeChild(document.getElementById('row-data-type-' + childId));
//     });
//     col2.appendChild(removeButton);
//
//     row.appendChild(col1);
//     row.appendChild(col2);
//
//     return row;
// }




window.onload = function() {
    attributeParentDiv.appendChild(getAttributeElement());
    // attributeParentDiv.insertBefore(document.createElement('hr'), document.getElementById('last-row-attribute'));
}

btnAddAttr.addEventListener('click', async function(event) {
    numAttributeElements++;
    attributeParentDiv.appendChild(getAttributeElement());
    // attributeParentDiv.insertBefore(document.createElement('hr'), document.getElementById('last-row-attribute'));
});

btnAddQuery.addEventListener('click',async function(){
    numQueryElements++;
    console.log("btnAddQuery");
    queryParentDiv.appendChild(getQueryElement());
});

// btnAddAttrReq.addEventListener('click',async function(){
//     numAttrReqElements++;
//     numDataTypes++;
//     console.log("btnAddAttrReq");
//     attrReqParentDiv.appendChild(getAttrReqElement());
//     attrDataTypeParentDiv.appendChild(getDataTypeElement());
// });


btnSubmit.addEventListener('click', async function(event) {
    if(attributeParentDiv.children.length === 0) {
        console.log('Invalid Request');
    }
    else {
        let i;
        let elementsArray = [];
        let queries=[];
        let elementsReqArray = [];
        let dataTypeArray = [];

        let length = attributeParentDiv.children.length;

        for(i = 0; i < length; i++) {
            let name = attributeParentDiv.children[i].children[1].children[0].value;
            elementsArray.push(name);

           // let check = ;
            if(attributeParentDiv.children[i].children[0].children[0].checked == true)
            {
             //   let reqAttr = attributeParentDiv.children[i].children[1].children[0].value;
                let dataType = attributeParentDiv.children[i].children[2].children[0].value;
                elementsReqArray.push(name);
                dataTypeArray.push(dataType);
            }

        }

        console.log(elementsArray);
        console.log(elementsReqArray);
        console.log(dataTypeArray);
        length = queryParentDiv.children.length;

        for(i = 0; i < length; i++) {
            let query = queryParentDiv.children[i].children[0].children[0].value;
            let data={};
            // data["query"] = query;
            // queries.push(data);
            queries.push(query);
        }

        let json_data = {};
        json_data['stream_name'] = document.getElementById('streamName').value;
        json_data['data_src'] = document.getElementById('dataSrc').value;
        json_data['data_file_src'] = document.getElementById('dataSrcFile').value;
        json_data['window_size'] = document.getElementById('windowSize').value;
        json_data['window_type'] = document.getElementById('windowType').value;
        json_data['velocity'] = document.getElementById('velocity').value;
        json_data['windowing'] = document.getElementById('windowing').value;
        json_data['elementsArray'] = elementsArray;
        json_data['queries'] = queries;
        json_data['elementsReqArray'] = elementsReqArray;
        json_data['dataTypeArray'] = dataTypeArray;

        console.log(json_data);

        // //=============Remove this
        // json_data={
        //     "stream_name": "forex_akshil",
        //     "data_src": "forex-data.csv",
        //     "data_file_src": "forex-data.csv",
        //     "window_size": "20",
        //     "window_type": "Tumbling",
        //     "velocity": "5",
        //     "windowing": "Tuple",
        //     "elementsArray": ["Item", "LastPrice", "LastDiffValue", "LastDiffPercentage", "DailyRangeLow", "DailyRangeHigh", "Bid", "Ask"],
        //     "queries": ["select count(*) from forex_akshil_data", "select avg(LastPrice) from forex_akshil_data"],
        //     "elementsReqArray": ["Item", "LastPrice", "DailyRangeLow", "DailyRangeHigh"],
        //     "dataTypeArray": ["VARCHAR(255)", "INT", "INT", "INT"],
        // };
        // console.log(json_data);
        // //====================

        axios
            .post('/newStreamDetails', {
                "json_data" : JSON.stringify(json_data)
            })
            .then(response => {
                document.getElementById("userProfileForm").submit();
            })
            .catch(error=> {
                console.log("error")
                document.getElementById("incorrectCred").innerText = "Incorrect username/password";
            });
    }
});
