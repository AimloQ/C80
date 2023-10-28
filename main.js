std_array =[];
function submit() {
    var display_array=[];
    for ( var j = 1; j <= 4; j++) {
        var name_std=document.getElementById("name_of_the_student_"+j).value;
        console.log(name_std);
        std_array.push(name_std);
    }
    console.log(std_array);
    var length_array= std_array.length;
    console.log(length_array);
    for (var i = 0; i < length_array; i++) {
        display_array.push("<h4>NAME-"+std_array[i]+"</h4>");
        console.log(display_array);
    }
    console.log(display_array);
    document.getElementById("display_name_with_commas").innerHTML=display_array;
    var commas_r=display_array.join(" ");
    console.log(commas_r);
    document.getElementById("display_name_without_commas").innerHTML=commas_r;

    document.getElementById("submit_button").style.display="none";
    document.getElementById("sort_button").style.display="inline-block";
}

function sorting() {
    std_array.sort();
    console.log(std_array);
    var display_sorted=[];
    var length_array2=std_array.length;
    console.log(length_array2);
    for (var l = 0; l < length_array2; l++) {
        display_sorted.push("<h4>NAME-"+std_array[l]+"</h4>");
        console.log(display_sorted);
    }
    var remove_commas=display_sorted.join(" ");
    console.log(remove_commas);
    document.getElementById("display_name_without_commas").innerHTML=remove_commas;

}