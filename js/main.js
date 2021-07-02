const links = [
      
    {list: ["Week2 Notes", "week2/notes02.html", "Team Assignment", "week2/code02.html"],
    },
  
    {list: ["Week3 Notes", "week3/notes03.html", "Team Assignment", "week3/code03.html", "Exercise", "week3/exercise.html"],
    },
  
    {list: ["Week4 Notes", "week4/notes04.html", "Team Assignment", "week4/code04.html"],
    },
  
    {list: ["Week5 Notes", "week5/notes05.html", "Team Assignment", "week5/code05.html"],
    },
  
    {list: ["Week6 TODO List", "todo_list/index.html"],
    },
  
    {list: ["Week7 Notes", "week7/notes07.html", "Team Assignment", "week7/index.html"],
    },
  
    {list: ["Week8 Notes", "week8/notes08.html", "Team Assignment", "week8/index.html"],
    },
  
    {list: ["Week9 Notes", "Week9/notes09.html", "Team Assignment", "Week9/index-START.html", "Proposal", "Week9/proposal.html"],
    },
  
    {list: ["Week10 Notes", "week10/notes10.html", "Team Assignment", "week10/index.html"],
    },
  ];
  
  let weeklist = document.getElementById("weeklist");
  
  links.forEach(function (link) {
      let listHtml = "";
      for(let i = 0; i < link.list.length;i+=2){

        listHtml += `<a href="${link.list[i+1]}">${link.list[i]}</a> | `;  
    
    }    
    var li = document.createElement("li");
    li.innerHTML = listHtml;
    weeklist.appendChild(li);
  });