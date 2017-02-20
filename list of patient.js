var jsonList = new Array();
jsonList = [
{
"firstname": "Kamal",
"lastname": "Bisht",
"age": 26,
"Dob": "01/11/1991",
"gender": "Male",
"phone" : 945606603 
},
{
"firstname": "Priya",
"lastname": "Mehra",
"age": 19,
"Dob": "01/05/1998",
"gender": "Female",
"phone" : 9487603471
},
{
"firstname": "Manoj",
"lastname": "Joshi",
"age": 29,
"Dob": "16/11/1988",
"gender": "Male",
"phone" : 9456660030
},
{
"firstname": "Gopal",
"lastname": "Rawat",
"age": 30,
"Dob": "01/10/1987",
"gender": "Male",
"phone" : 9456001700
},
{
"firstname": "Nidhi",
"lastname": "Shrivastav",
"age": 25,
"Dob": "11/12/1992",
"gender": "Female",
"phone" : 9458762430
},
{
"firstname": "Pooja",
"lastname": "Singh",
"age": 22,
"Dob": "12/11/1995",
"gender": "Female",
"phone" : 9445321200
},
];
function sortByName(jsonList , fisrtname) {
        return jsonList.sort(function(a, b) {
                var x = a[name]; var y = b[name];
                return ((x < y) ? -1 : ((x > y) ? 1 : 0));
        });
}

jsonList = sortByName(jsonList, 'firstname');
var tbody = document.createElement('tbody');
window.onload = function(){
        generateData();
}

function searchResults(){
        var textValue = (document.getElementById("jsonText").value).toLowerCase();
        if(textValue == ""){
                generateData();
        }
        else{
                var innerHTML = "";
                for(i=0;i<jsonList.length;i++){
                        if((jsonList[i].firstname).toLowerCase().indexOf(textValue) > -1 || (jsonList[i].lastname).toLowerCase().indexOf(textValue) > -1 || (jsonList[i].gender).toLowerCase().indexOf(textValue) > -1){
                                innerHTML = innerHTML + '<tr><td>' + jsonList[i].firstname + '</td><td>' + jsonList[i].lastname +'</td><td>'+  jsonList[i].age + '</td><td>'+  jsonList[i].Dob  + '</td><td><select id="genderField"><option value="Male">Male</option><option value="Female">Female</option></select></td><td>' + jsonList[i].phone +  '</td></tr>';
                        } 
                }
                if(innerHTML==""){
                        document.getElementById("errorMessage").innerHTML="not found please enter new detail if you want";
                }
                        document.getElementById("newEntry").style.display = "block";
                        innerHTML = innerHTML + '<tr><td><input type="text" id="firstnameField"></td><td><input type="text" id="lastnameField"></td><td><input type="text" id="ageField"></td><td><input type="text" id="DobField"></td><td><select id="genderField"><option value="Male">Male</option><option value="Female">Female</option></select></td><td><input type="text" id="phoneField"</td></tr>';

                tbody.innerHTML = innerHTML;
                document.getElementById("jsonList").appendChild(tbody);

        }
}

function addDetails(){
        var newDetails = {"firstname" : document.getElementById("firstnameField").value,
"lastname" : document.getElementById("lastnameField").value,
"age": document.getElementById("ageField").value,
"Dob": document.getElementById("DobField").value,
"gender": document.getElementById("genderField").value,
"phone": document.getElementById("phoneField").value};
        jsonList.push(newDetails);
        jsonList = sortByName(jsonList, 'firstname');
        document.getElementById("jsonText").value = '';
        generateData();
        alert("Entry has been Saved succesfully!!! Click OK!!!");
}

function generateData(){
        var innerHTML = "";
        for(i=0;i<jsonList.length;i++){
                innerHTML = innerHTML + '<tr><td>' + jsonList[i].firstname + '</td><td>' + jsonList[i].lastname + '</td><td>' + jsonList[i].age + '</td><td>' + jsonList[i].Dob + '</td><td>'+jsonList[i].gender+'</td><td>' + jsonList[i].phone + '</td></tr>';
        }
        document.getElementById("newEntry").style.display = "none";
        tbody.innerHTML = innerHTML;
        document.getElementById("jsonList").appendChild(tbody);
        document.getElementById("newEntry").style.display = "block";
                        innerHTML = innerHTML + '<tr><td><input type="text" id="firstnameField" placeholder="First Name"></td><td><input type="text" id="lastnameField" placeholder="Last Name"></td><td><input type="number" id="ageField" placeholder="Age"></td><td><input type="text" placeholder="DOB" id="DobField" ></td><td><select id="genderField"><option value="Male">Male</option><option value="Female">Female</option></select></td><td><input type="number" placeholder="Phone number" id="phoneField" value="Enter phonenumber"</td></tr>';

                tbody.innerHTML = innerHTML;
                document.getElementById("jsonList").appendChild(tbody);
}
