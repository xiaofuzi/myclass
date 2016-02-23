/*
* javascirpt oop-面向对象
* class-类
* object-对象
*/

/*
* 构造函数/class(和普通的函数并没有区别)
*/
function Animal(){
	this.name = "animal";
	this.age = '18';
}
//静态变量、静态方法
//无法通过类的this/派生的对象来访问
Animal.width = 100;
Animal.getWidth = function(){

}
$.ajax({})

$('#ele').append('yangxiaofu');

/*
* javascript是一门基于原型的语言，但是我们可以使用原型来模拟面向对象的写法
*/
Animal.prototype.color = 'red';

Animal.prototype.eat = function(){
	console.log('prototype eat');
}

Animal.prototype.look = function(){
	console.log('prototype look');
}

console.log('Animal class:', Animal);
console.log('Animal class prototype:', Animal.prototype);


//cat object
/*
* 1.对象具有this上的属性和方法(把this就当作对象本身)
* 2.对象会具有挂在类的原型上的方法和属性
*/
var cat = new Animal();
var dog = new Animal();
var chick = new Animal();


cat.name; //animal
cat.age;  //18
cat.eat()
cat.color;
cat.look;
console.log('cat object:', cat);

var el = $('el'); //new 生成一个对象
$('el').init().append().prepend();

