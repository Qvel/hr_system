/**
 * Created by Серый on 03.05.2016.
 */

$(document).ready(function () {

    $.ajax({
        url: "http://localhost:8080/hr_system-1.0-SNAPSHOT/getQuantityQuestions",
        type: "GET",
        //   contentType : "application/json",
        //beforeSend: funcbefor,
        dataType: "json",
        // data:{'id':id},
        contentType: 'application/json',
        mimeType: 'application/json',
        success: getQuantityQuestions,
        error: function (data) {
            console.log(data);
        }
    });

    $(document).on("click","#ButtonQuestion",function(){

        var caption = $("input[name='Caption']").val();
        var curse_id = $("input[name='Curse_id']").val();
        var typeValue = $("#TypeOfQuestion").val();
        //var additionValue = $(".VariantQuestion").val();
        var additionValue = null;
        var isMandatory = false;
        var orderNumber = QuantityQuestions+1;

        $.ajax({
            url: "http://localhost:8080/hr_system-1.0-SNAPSHOT/setQuestion",
            type: "GET",
            dataType: "json",
            data: {
                'caption': caption,
                'curse_id': curse_id,
                'typeValue': typeValue,
                'additionValue': additionValue,
                'isMandatory': isMandatory,
                'orderNumber': orderNumber
            },
            contentType: 'application/json',
            mimeType: 'application/json',
            success: setSetting,
            error: function (data) {
                console.log(data);
            }
        });

    });




    $.ajax({
        url: "http://localhost:8080/hr_system-1.0-SNAPSHOT/admin/up_setting",
        type: "GET",
        //   contentType : "application/json",
        //beforeSend: funcbefor,
        dataType: "json",
        // data:{'id':id},
        contentType: 'application/json',
        mimeType: 'application/json',
        success: getSetting,
        error: function (data) {
            console.log(data);
        }
    });
        $.ajax({
            url: "http://localhost:8080/hr_system-1.0-SNAPSHOT/getTypeOfQuestions",
            type: "GET",
            //   contentType : "application/json",
            //beforeSend: funcbefor,
            dataType: "json",
            // data:{'id':id},
            contentType: 'application/json',
            mimeType: 'application/json',
            success: getTypeOfQuestions,
            error: function (data) {
                console.log(data);
            }
        });
    $("#ButtonIn").bind("click", function () {
        var registration_start_date = $("input[name='registration_start_date']").val();
        var registration_end_date = $("input[name='registration_end_date']").val();
        var interview_start_date = $("input[name='interview_start_date']").val();
        var interview_end_date = $("input[name='interview_end_date']").val();
        var course_start_date = $("input[name='course_start_date']").val();
        var interview_time_for_student = $("input[name='interview_time_for_student']").val();
        var student_for_interview_count = $("input[name='student_for_interview_count']").val();
        var student_for_course_count = $("input[name='student_for_course_count']").val();


        $.ajax({
            url: "http://localhost:8080/hr_system-1.0-SNAPSHOT/admin/admin_setting",
            type: "GET",
            //   contentType : "application/json",
            //beforeSend: funcbefor,
            dataType: "json",
            data: {
                'registrationStartDate': registration_start_date,
                'registrationEndDate': registration_end_date,
                'interviewStartDate': interview_start_date,
                'interviewEndDate': interview_end_date,
                'courseStartDate': course_start_date,
                'interviewTimeForStudent': interview_time_for_student,
                'studentForInterviewCount': student_for_interview_count,
                'studentForCourseCount': student_for_course_count

            },
            contentType: 'application/json',
            mimeType: 'application/json',
            success: setSetting,
            error: function (data) {
                console.log(data);
            }
        });
    });
    $("#ButtonPersonal").bind("click", function () {

        var name_peronal = $("input[name='name_peronal']").val();
        var sername_peronal = $("input[name='sername_peronal']").val();
        var patronymic_peronal = $("input[name='patronymic_peronal']").val();
        var email_peronal = $("input[name='email_peronal']").val();
        var role_personal = $("#PersonalRole").val();
        var password_peronal = $("input[name='password_peronal']").val();

        if (role_personal == "Admin") {
            Role_Id = ROLE_ADMIN;
        }
        if (role_personal == "BA") {
            Role_Id = "ROLE_BA";
        }
        if (role_personal == "HR") {
            Role_Id = "ROLE_HR";
        }
        if (role_personal == "DEV") {
            Role_Id = "ROLE_DEV";
        }
        if (role_personal == "Student") {
            Role_Id = "ROLE_STUDENT";
        }

        $.ajax({
            url: "http://localhost:8080/hr_system-1.0-SNAPSHOT/new_personal",
            type: "GET",
            //   contentType : "application/json",
            //beforeSend: funcbefor,
            dataType: "json",
            data: {
                'name_peronal': name_peronal,
                'sername_peronal': sername_peronal,
                'patronymic_peronal': patronymic_peronal,
                'email_peronal': email_peronal,
                'Role_Id': Role_Id,
                'password_peronal': password_peronal
            },
            contentType: 'application/json',
            mimeType: 'application/json',
            success: setPersonal,
            error: function (data) {
                console.log(data);
            }
        });


    });
    $('body').on("click",".plus",function(){
        $("#HowToAdd").append('<div>'+
                               '<div class="form-group NewVariant">'+
                                    '<span>Possible answers to the question:</span>'+
                                    '<input type="text" name="VariantQuestion" class="VariantQuestion form-control">'+
                                '</div>'+
                                '<span class="glyphicon glyphicon-plus-sign plus"></span>'+
                                '<span class="glyphicon glyphicon-minus-sign minus newminus"></span>'+
                             '</div>');
    });
    $('body').on("click",".newminus",function(){
        $(this).parent().remove();
    });

});

function getSetting(data) {
    dataNewInto = data;


    $("#reg_start_date").attr("placeholder", data.registrationStartDate);
    $("#reg_end_date").attr("placeholder", data.registrationEndDate);
    $("#int_start_date").attr("placeholder", data.interviewStartDate);
    $("#interview_end_date").attr("placeholder", data.interviewEndDate);
    $("#course_start_date").attr("placeholder", data.courseStartDate);
    $("#interview_time_for_student").attr("placeholder", data.interviewTime);
    $("#student_for_interview_count").attr("placeholder", data.studentInterviewCount);
    $("#student_for_course_count").attr("placeholder", data.studentCourseCount);


}

function setSetting(data) {
    alert("Course Setting UpDate. Reload Page");
}

function setPersonal(data) {
    alert("HelloNewPersonal");
    personalData = data;
}

function getTypeOfQuestions(data){
     newDateType = data;
    for (var index in data){
        $("#TypeOfQuestion").append('<option>'+data[index].typeValue+'</option>');
    }

    $('body').on('change', '#TypeOfQuestion', function(){

        var a  = $(this).val();


        if(a == "combobox" || a == "checkbox" || a == "textANDselect" ){
            $('#ComboBox').css('display','block');
        }else if (a == "String" || a == "int") {
            $('#ComboBox').css('display','none');
        }

    });


}

function getQuantityQuestions(data){
    QuantityQuestions = data;
    alert(QuantityQuestions);
}