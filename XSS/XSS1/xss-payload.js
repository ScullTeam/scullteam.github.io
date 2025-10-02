(function(){
  const dpr = window.devicePixelRatio || 1;
  const canvas = document.createElement('canvas');
  canvas.style.cssText = 'position:fixed;top:0;left:0;width:100%;height:100%;z-index:999999;pointer-events:none';
  document.body.appendChild(canvas);
  const ctx = canvas.getContext('2d');
  function resize(){
    const w = window.innerWidth;
    const h = window.innerHeight;
    canvas.width = Math.floor(w * dpr);
    canvas.height = Math.floor(h * dpr);
    canvas.style.width = w + 'px';
    canvas.style.height = h + 'px';
    ctx.setTransform(dpr,0,0,dpr,0,0);
    width = w;
    height = h;
    setupGrid();
  }
  let width = window.innerWidth;
  let height = window.innerHeight;
  const words = ['XSS','HACKED','ALERT','PWNED','DANGER','SECURITY','BREACH','EXPLOIT','ACCESS','GRANTED'];
  const palette = ['lime','red','cyan','yellow','magenta','orange','white','#0ff','#f0f','#0f0'];
  const fontSize = 14;
  const cellW = 90;
  const cellH = 28;
  const verticalMultiplier = 6;
  let cols = Math.max(1,Math.floor(width/cellW));
  let baseRows = Math.max(1,Math.floor(height/cellH));
  let rows = baseRows * verticalMultiplier;
  let virtualH = rows * cellH;
  let cells = [];
  let items = [];
  function setupGrid(){
    cols = Math.max(1,Math.floor(width/cellW));
    baseRows = Math.max(1,Math.floor(height/cellH));
    rows = baseRows * verticalMultiplier;
    virtualH = rows * cellH;
    cells = [];
    for(let r=0;r<rows;r++){
      for(let c=0;c<cols;c++){
        cells.push({x:c*cellW,y:r*cellH});
      }
    }
    items = [];
    const total = cells.length;
    for(let i=0;i<total;i++){
      const cell = cells[i];
      const text = words[i % words.length];
      const color = palette[Math.floor(Math.random()*palette.length)];
      const left = cell.x + 4 + Math.floor(Math.random()*(Math.max(1,cellW-8- (text.length*fontSize*0.55))));
      const top = cell.y - Math.floor(Math.random()*baseRows*cellH);
      const speed = 0.2 + Math.random()*1.8;
      items.push({text,color,left, y:top, speed});
    }
  }
  resize();
  window.addEventListener('resize',()=>{ resize(); });
  ctx.font = 'bold '+fontSize+'px Arial, sans-serif';
  ctx.textBaseline = 'top';
  function frame(now){
    ctx.clearRect(0,0,width,height);
    for(let i=0;i<items.length;i++){
      const it = items[i];
      it.y += it.speed;
      if(it.y > virtualH) it.y -= virtualH;
      const visibleY = ((it.y % (baseRows*cellH)) + (baseRows*cellH)) % (baseRows*cellH);
      const alpha = 1;
      ctx.globalAlpha = alpha;
      ctx.fillStyle = it.color;
      ctx.fillText(it.text, it.left, visibleY);
    }
    requestAnimationFrame(frame);
  }
  requestAnimationFrame(frame);
})();
