class Form{
    constructor(){}
    display(){    
        var button = createButton("Clear");
        button.position(250,200);
    
    
        button.mousePressed(function(){
            button.hide();
            Form.clear();
        })
    }
    
    }