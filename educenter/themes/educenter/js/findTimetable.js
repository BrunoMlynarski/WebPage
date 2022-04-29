$(document).ready(function() {
    $.ajax({
        url: "http://localhost:8081/timetable"
    }).then(function(data) {
        for (var i in data){
            let tempHtml = `
                            <div class="col-lg-4 col-sm-6 mb-5">
                                <div class="card p-0 border-primary rounded-0 hover-shadow">
                                    <img class="card-img-top rounded-0" src="images/courses/course-3.jpg" alt="course thumb">
                                    <div class="card-body">
                                            <h4 class="card-title">` + data[i].number + `</h4>
                                        <p class="card-text mb-4">` + data[i].time + `</p>
                                        <button>Delete</button>
                                    </div>
                                </div>`
                        $(".parts").append(tempHtml);
        }
    });
});