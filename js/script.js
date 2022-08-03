let form = document.getElementById("form")


form.addEventListener('submit', function(event) {
    event.preventDefault();

    let name = document.getElementById("name").value;

    let role = document.getElementById("role").value;

    let about = document.getElementById("about").value;

    let gender = document.getElementById("gender").value;
    class socialLinks {
        constructor(username) {
            this.username = username;
        }
    }
    const github = new socialLinks(document.getElementById("github").value);
    const linkedin = new socialLinks(document.getElementById("linkedin").value);
    const twitter = new socialLinks(document.getElementById("twitter").value);
    const instagram = new socialLinks(document.getElementById("instagram").value);

    document.getElementById("formparent").style.cssText = 'display: none;'

    function output() {
        // Gender
        if (gender == "M" || gender == "m") {
            document.getElementById("dp").src = "media/Male.png";
        }
        if (gender == "F" || gender == "f") {
            document.getElementById("dp").src = "media/Female.png";
        }

        // About
        document.getElementById("nameOutput").innerHTML = name;
        document.getElementById("roleOutput").innerHTML = role;
        document.getElementById("aboutOutput").innerHTML = about;

        // Social Links 
        if (github.username.length != 0) {
            document.getElementById("githubOutput").href = "https://github.com/" + github.username;
        }
        if (linkedin.username.length != 0) {
            document.getElementById("linkedinOutput").href = "https://www.linkedin.com/in/" + linkedin.username;
        }
        if (twitter.username.length != 0) {
            document.getElementById("twitterOutput").href = "https://twitter.com/" + twitter.username;
        }
        if (instagram.username.length != 0) {
            document.getElementById("instagramOutput").href = "https://www.instagram.com/" + instagram.username;
        }
        // Card dislpay
        document.getElementById("card").style.cssText = 'display: flex;'
    }
    output();
})

function ssbtn() {
    var content = document.getElementById("card");
    html2canvas(content).then(
        function(canvas) {
            document.getElementById("result").appendChild(canvas);
        }
    )
}