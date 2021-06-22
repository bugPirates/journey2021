< html >
    <
    head >
    <
    title > <%= title %> < /title> <
    meta charset = "utf-8" >
    <
    meta name = "viewport"
content = "width=device-width, initial-scale=1" >
    <
    link rel = "stylesheet"
href = "https://maxcdn.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" >
    <
    script src = "https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js" > < /script> <
    script src = "https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.7/umd/popper.min.js" > < /script> <
    script src = "https://maxcdn.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js" > < /script> <
    /head> <
    body >
    <
    div class = "container" >
    <
    h2 > <%= title %> < /h2> <
    a href = "/add"
class = "btn btn-sm btn-primary" > Add < /a> <
    table close = "table tbale-dark table-striped" >
    <
    thead >
    <
    tr >
    <
    th > Nama < /th> <
    th > Jenis Penyakit < /th> <
    th > Usia < /th> <
    th > Alamat < /th> <
    th > Action < /th> <
    /tr> <
    /thead> <
    tbody >
    <% users.forEach(function(user)){ %> <
    tr >
    <
    td > <%= nama %> < /td> <
    td > <%= jenis_penyakit %> < /td> <
    td > <%= usia %> < /td> <
    td > <%= alamat %> < /td> <
    td >
    <
    a href = "edit/ <%= id %>"
class = "btn btn-sm btn-primary" > Edit < /a> <
    a href = "delete/ <%= id %>"
class = "btn btn-sm btn-danger" > Delete < /a> <
    /td> <
    /tr>
<% }); %> <
/tbody> <
/table> <
/div> <
/body>

<
/html>