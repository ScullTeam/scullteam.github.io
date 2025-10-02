(function(){
  document.body.innerHTML='';
  document.body.style.background='black';
  const container=document.createElement('div');
  container.style.cssText='position:fixed;top:0;left:0;width:100%;height:100%;z-index:999999;overflow:hidden;pointer-events:none';
  document.body.appendChild(container);
  const messages=['XSS','HACKED','ALERT','PWNED','DANGER','SECURITY','BREACH','EXPLOIT','ACCESS','GRANTED'];
  const colors=['lime','red','cyan','yellow','magenta','orange','white','#0ff','#f0f','#0f0'];
  const screenWidth=window.innerWidth;
  const screenHeight=window.innerHeight;
  const textSize=20;
  const cellWidth=110;
  const cellHeight=36;
  const baseCols=Math.max(1,Math.floor(screenWidth/cellWidth));
  const baseRows=Math.max(1,Math.floor(screenHeight/cellHeight));
  const verticalMultiplier=50;
  const cols=baseCols;
  const rows=baseRows*verticalMultiplier;
  const virtualHeight=rows*cellHeight;
  const displayHeight=baseRows*cellHeight;
  const cells=new Array(cols*rows);
  let ci=0;
  for(let r=0;r<rows;r++){
    for(let c=0;c<cols;c++){
      cells[ci++]={x:c*cellWidth,y:r*cellHeight};
    }
  }
  function pickCell(){
    if(cells.length===0) return null;
    const idx=Math.floor(Math.random()*cells.length);
    const cell=cells[idx];
    const last=cells[cells.length-1];
    cells[idx]=last;
    cells.pop();
    return cell;
  }
  const desiredCount=2000;
  const total=Math.min(desiredCount,cols*rows);
  const elements=[];
  for(let i=0;i<total;i++){
    const el=document.createElement('div');
    el.textContent=messages[i%messages.length];
    el.style.cssText=`position:absolute;font:bold ${textSize}px Arial, sans-serif;margin:0;white-space:nowrap;text-shadow:0 0 6px currentColor;opacity:0.95;pointer-events:none;`;
    el.style.color=colors[i%colors.length];
    const cell=pickCell();
    if(!cell) break;
    container.appendChild(el);
    const tw=el.offsetWidth||Math.max(8,cellWidth-8);
    const maxLeftOffset=Math.max(0,cellWidth-tw);
    const left=cell.x+Math.floor(Math.random()*(maxLeftOffset+1));
    const top=cell.y-Math.floor(Math.random()*baseRows*cellHeight);
    el.style.left=left+'px';
    el.dataset.y=String(top);
    el.style.top=top+'px';
    const speed=0.5+Math.random()*2.5;
    elements.push({el,speed});
  }
  let lastTime=performance.now();
  function animate(now){
    const dt=(now-lastTime)/16.6667;
    lastTime=now;
    for(let i=0;i<elements.length;i++){
      const obj=elements[i];
      let y=parseFloat(obj.el.dataset.y);
      y+=obj.speed*dt;
      if(y>virtualHeight) y-=virtualHeight;
      obj.el.dataset.y=String(y);
      const visibleY=((y%displayHeight)+displayHeight)%displayHeight;
      obj.el.style.top=visibleY+'px';
    }
    requestAnimationFrame(animate);
  }
  requestAnimationFrame(animate);
  setInterval(()=>{
    for(let i=0;i<elements.length;i++){
      const obj=elements[i];
      obj.el.style.color=colors[Math.floor(Math.random()*colors.length)];
    }
  },120+Math.floor(Math.random()*200));
})();
