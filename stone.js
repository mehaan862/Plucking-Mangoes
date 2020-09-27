class Stone
{
	constructor(x,y,r)
	{
		var options={
			isStatic:true,
			restitution:0,
			friction:1.0,
			density:1.2

			
			}
		this.x=x;
		this.y=y;
		this.r=r;
		this.image=loadImage("Plucking mangoes/stone.png")
		this.body=Bodies.circle(this.x, this.y, this.r/2, options)
		World.add(world, this.body);

		

	}
	display()
	{
			
			var stonepos=this.body.position;		

			push()
			translate(stonepos.x, stonepos.y);
			imageMode(CENTER)
			strokeWeight(3);
			fill(255,0,255)
			image(this.image,0,0,this.r, this.r);
			pop()
			
	}

}