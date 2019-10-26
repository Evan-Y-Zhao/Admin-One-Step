# Admin-One-Step
As we all know as a frontend, building an admin with CURD operations is kind of essential work to a data-driven website. The admin-one-step is the one you can start with.

The form builder accepts few parameters to build a form by iteself, which are a layout object that dictates how the form's fileds display, a 'fileds' object that difines what kind of component the field is, a function to deal with the submission, and a error handle function. The layout object and fields object is indeed a mapping realtionship. The key in fields object will find the value in layout object, and then display itself with the corresponding component.

Thanks to antd design. The underlying components are all from antd design.

Go find the feedback example i have setup. By doing this way, building a form is in a snap.

Enjoy
