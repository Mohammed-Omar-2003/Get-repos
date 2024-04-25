let theInput = document.querySelector(".get-repos input");
let getButton = document.querySelector(".get-button");
let reposData = document.querySelector(".show-data");

getButton.addEventListener("click", getRepos);
function getRepos() {
  if (theInput.value == "") {
    reposData.textContent = "Please Write Github Username.";
  } else {
    //fetch دى هى ال بتاخد البيانات ومن مكان وتعرضها
    fetch(`https://api.github.com/users/${theInput.value}/repos`)
      .then((response) => response.json())
      .then((repositories) => {
        // Empty The Container
        reposData.innerHTML = "";
        // Loop On Repositories
        repositories.forEach((repo) => {
          let mainDiv = document.createElement("div");
          let repoName = document.createTextNode(repo.name);
          mainDiv.className = "repo-box";
          mainDiv.appendChild(repoName);
          let theUrl = document.createElement("a");
          let theUrlText = document.createTextNode("Visit");
          theUrl.appendChild(theUrlText);
          theUrl.href = `https://github.com/${theInput.value}/${repo.name}`;
          // عشان لما اضغط على الرابط يفتح فى صفحه جديده
          theUrl.setAttribute("target", "_blank");
          mainDiv.appendChild(theUrl);
          //انا عملتو فى الاخر عشان يضيف بعد مااعمل كل حاجه
          reposData.appendChild(mainDiv);
        });
      });
  }
}
