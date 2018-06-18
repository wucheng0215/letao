; (function () {
  //bootstrapvalidator 
  //1、依赖于bootstrap
  //2、自动的进行表单校验，只需要配置一些校验的规则
  //3、在表单提交的时候以及输入内容的时候自动校验，一定要是表单的submit
  //如果校验失败了，阻止表单的提交
  //如果表单校验成功了，会让表单继续提交，一定要是submit

  //初始化表单校验,
  $("form").bootstrapValidator({

    //配置校验规则，用户名，用户密码不能为空
    //用户密码要在6-12位
    fields: {
      //指的是对应了表单中的name属性
      username: {
        validators: {
          notEmpty: {
            message: "用户名不能为空"
          },
          stringLength: {
            message: "长度必须在3-9位之间",
            min: 3,
            max: 9
          }
        }
      },

      password: {
        validators: {
          notEmpty: {
            message: "用户密码不能为空"
          },
          stringLength: {
            message: "长度必须在6-12位之间",
            min: 6,
            max: 12
          }
        }
      }
    },


    //配置小图片
    feedbackIcons: {
      valid: 'glyphicon glyphicon-ok',
      invalid: 'glyphicon glyphicon-remove',
      validating: 'glyphicon glyphicon-refresh'
    },
  })

  //当表单校验成功时，阻止表单的跳转，发送ajax请求
  $("form").on('success.form.bv', function (e) {
    
    //阻止表单的跳转
    e.preventDefault();
    //使用ajax提交数据

    $.ajax({
      type: "post",
      url: "/employee/employeeLogin",
      data: $("form").serialize(),
      success: function (info) {
        console.log(info);
      }

    })

  });

})()