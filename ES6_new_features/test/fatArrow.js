var alert=()=>"hello world eg1 with no parameter";
console.log(alert());
var add=(a,b)=>console.log("here we'll do parameter example and sum is "+(a+b));
add(5,7);
var obj={
    msg:"this is the message",
    showmsg:function (msgBol, handler) {
        handler(msgBol);
        
    }
,
   inside: function(){
        this.showmsg(true,msgBol=>console.log(msgBol ? this.msg.toUpperCase() : this.msg.toLowerCase()));
    }

}
obj.inside();


