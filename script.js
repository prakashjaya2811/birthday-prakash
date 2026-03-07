const rope = document.getElementById("rope")

rope.addEventListener("mousedown", startPull)
rope.addEventListener("touchstart", startPull)

function startPull(){

/* rotate cinema reel */

document.getElementById("reelWheel").classList.add("spin")

/* play reel sound */

document.getElementById("reelSound").play()

/* hide rope AFTER pulling */

rope.style.transition="0.5s"
rope.style.opacity="0"
setTimeout(()=>rope.style.display="none",500)

/* OPEN CURTAINS */

document.getElementById("leftCurtain").style.transform="translateX(-100%)"
document.getElementById("rightCurtain").style.transform="translateX(100%)"

setTimeout(()=>{

document.getElementById("reelSound").pause()
document.getElementById("reelWheel").remove()

},1500)

document.getElementById("instruction").style.display="none"

document.getElementById("quote").style.display="block"

/* SHOW SPOTLIGHT */

setTimeout(()=>{
document.getElementById("spotlight").style.display="block"
document.getElementById("name").style.display="block"
document.getElementById("message").style.display="block"
document.getElementById("cake").style.display="block"
},1500)

/* PLAY MUSIC */

document.getElementById("music").play()

/* BALLOONS */

for(let i=0;i<40;i++){

setTimeout(()=>{

let b=document.createElement("div")
b.className="balloon"

/* balloon pop event */

b.addEventListener("click", popBalloon)
b.addEventListener("touchstart", popBalloon)

b.style.left=Math.random()*100+"vw"
b.style.background="hsl("+Math.random()*360+",70%,60%)"

document.body.appendChild(b)
b.style.setProperty("--delay", Math.random()*5)

}, Math.random()*3000)

}

/* CANDIES */

for(let i=0;i<25;i++){

let c=document.createElement("div")
c.className="candy"

c.style.left=Math.random()*100+"vw"
c.style.bottom="-50px"

document.body.appendChild(c)

}

/* FIREWORKS */

setInterval(createFirework,1200)

}


/* FIREWORK PARTICLES */

function createFirework(){

let x=Math.random()*window.innerWidth
let y=Math.random()*window.innerHeight/2

for(let i=0;i<40;i++){

let p=document.createElement("div")
p.className="particle"

p.style.left=x+"px"
p.style.top=y+"px"

document.body.appendChild(p)

let angle=Math.random()*2*Math.PI
let speed=Math.random()*4+2

let vx=Math.cos(angle)*speed
let vy=Math.sin(angle)*speed

let life=0

let anim=setInterval(()=>{

life++

p.style.left=(p.offsetLeft+vx)+"px"
p.style.top=(p.offsetTop+vy)+"px"
p.style.opacity=1-life/40

if(life>40){
clearInterval(anim)
p.remove()
}

},30)

}

}

function popBalloon(e){

let balloon = e.target

balloon.classList.add("pop")

createMiniExplosion(balloon.offsetLeft, balloon.offsetTop)

setTimeout(()=>{
balloon.remove()
},300)

}

function createMiniExplosion(x,y){

for(let i=0;i<10;i++){

let p=document.createElement("div")

p.className="particle"

p.style.left=x+"px"
p.style.top=y+"px"

document.body.appendChild(p)

let angle=Math.random()*2*Math.PI
let speed=Math.random()*3+1

let vx=Math.cos(angle)*speed
let vy=Math.sin(angle)*speed

let life=0

let anim=setInterval(()=>{

life++

p.style.left=(p.offsetLeft+vx)+"px"
p.style.top=(p.offsetTop+vy)+"px"
p.style.opacity=1-life/25

if(life>25){
clearInterval(anim)
p.remove()
}

},20)

}

}