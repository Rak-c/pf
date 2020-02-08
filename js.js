$("input").prop('required', true);
$(function () {
  var inputs = document.getElementsByTagName("INPUT");
  for (var i = 0; i < inputs.length; i++) {
    inputs[i].oninvalid = function (e) {
      e.target.setCustomValidity("");
      if (!e.target.validity.valid) {
        e.target.setCustomValidity(e.target.getAttribute("data-error"));
      }
    };
  }
});
document.getElementById("form").onsubmit = function (e) {
  e.preventDefault();
  var body = `<h2 style="text-align:center;">استمارة معادلة شهادة</h2>
  <p style="font-size:20px; font-weight:500; letter-spacing: 1px;">
  الاسم كما ورد في الشهادة: ${$("#student-name").val()}` +
    '<br>' + `مسمى الشهادة: ${$("#certificate-name").val()}` +
    '<br>' + `عدد السنوات في جميع المراحل الدراسية: ${$("#years-number").val()}` +
    '<br>' + `اسم المدرسة: ${$("#school-name").val()}` +
    '<br>' + `البلد: ${$("#country-name").val()}` +
    '<br>' + `جنسية الطالب: ${$("#student-nationality").val()}` +
    '<br>' + `تاريخ التخرج: ${$("#ending-date").val()}` +
    '<br>' + `الجهة الرسمية التي طلبت معدلات الشهادة: ${$("#organization-name").val()}` +
    '<br>' + `العنوان في الإمارات: ${$("#address").val()}` +
    '<br>' + `الهاتف متحرك: ${$("#phone").val()}` +
    '<br>' + 
    `</p>`;
  Email.send({
    SecureToken: "375103b8-b11b-4107-b24e-5f89797e1850",
    To: "chcrak@gmail.com",
    From: "chcrak@gmail.com",
    Subject: `طلب طلب معادلة شهادة لـ: ${$("#student-name").val()}`,
    Body: `<div style="letter-spacing: 1px;
    border-right: 6px solid #323130;
    background-color:rgba(0, 0, 0, 0.01);
    position:absolute; right:0; display: inline-block;
    padding:20px !important; border-radius: 10px!important; font-family: 'Calibri', sans-serif;
    color:#323130;" dir="rtl">${body}</div>`
  }).then((message) => {
    if (message == "OK") {
      $("#main").addClass("blur");
      $("#main2").removeClass("hide");
      $("#overlay").addClass("disable")
      $("html").css("overflow", "hidden");
    } else {
      $("#main").addClass("blur");
      $("#main4").removeClass("hide");
      $("#overlay").addClass("disable")
      $("html").css("overflow", "hidden");
    }
    document.getElementById("form").reset();
  });
};

function TodayDate() {
  var today = new Date();
  var dd = String(today.getDate()).padStart(2, '0');
  var mm = String(today.getMonth() + 1).padStart(2, '0');
  var yyyy = today.getFullYear();
  return today = mm + '/' + dd + '/' + yyyy;

}
