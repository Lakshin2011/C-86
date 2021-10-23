var canvas = new fabric.Canvas('myCanvas');
player_x=10;
player_y=510;
block_w=30;
block_h=30;
block_object="";
player_object="";
function player()
{
    fabric.Image.fromURL("player.png",function(Img)
    {
        player_object=Img;
        player_object.scaleToWidth(150);
        player_object.scaleToHeight(150);
        player_object.set(
            {
                top:player_y,left:player_x
            }
        );
        canvas.add(player_object);
    });
}

function block(get_image)
{
    fabric.Image.fromURL(get_image,function(Img)
    {
        block_object=Img;
        block_object.scaleToWidth(block_w);
        block_object.scaleToHeight(block_h);
        block_object.set(
            {
                top:player_y,left:player_x
            }
        );
        canvas.add(block_object);
    });
}