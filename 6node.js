let students =
[
    {id : 1 ,s_name: "Ramya" , city : "Eluru"},
    {id : 2 ,s_name: "Ram" , city : "khammam"},
    {id : 3 ,s_name: "Bhumi" , city : "vizag"},
    {id : 4 ,s_name: "Geetha" , city : "TPG"},
    {id : 5 ,s_name: "Bhavya" , city : "vijayawada"},
]
for ( i in students)
{
  console.log(`${students[i].s_name} from ${students[i].city}`);
}
for (i of students)
    {
        console.log(`${i.s_name} from ${i.city}`);
    }