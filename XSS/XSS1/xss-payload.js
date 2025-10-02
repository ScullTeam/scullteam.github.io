(function(){
  const desiredCount = 500;
  const dpr = window.devicePixelRatio || 1;
  const canvas = document.createElement('canvas');
  canvas.style.cssText='position:fixed;top:0;left:0;width:100%;height:100%;z-index:999999;pointer-events:none;background:black';
  document.body.appendChild(canvas);
  const ctx = canvas.getContext('2d');
  let w = window.innerWidth;
  let h = window.innerHeight;

  function resize(){
    w = window.innerWidth;
    h = window.innerHeight;
    canvas.width = Math.floor(w * dpr);
    canvas.height = Math.floor(h * dpr);
    canvas.style.width = w + 'px';
    canvas.style.height = h + 'px';
    ctx.setTransform(dpr,0,0,dpr,0,0);
    layout();
  }

  window.addEventListener('resize', resize);

  const words = new Array(desiredCount).fill('HACKED');
  const palette = ['lime','red','cyan','yellow','magenta','orange','white','#0ff','#f0f','#0f0'];
  let items = [];
  let fontSize = 14;

  function layout(){
    items = [];
    const aspect = w / h;
    const cols = Math.max(1, Math.ceil(Math.sqrt(desiredCount * aspect)));
    const rows = Math.ceil(desiredCount / cols);
    const cellW = Math.floor(w / cols);
    const cellH = Math.floor(h / rows);
    fontSize = Math.max(10, Math.min(cellH - 4, 24));
    ctx.font = 'bold '+fontSize+'px Arial, sans-serif';
    ctx.textBaseline = 'top';
    let idx = 0;
    for(let r=0;r<rows && idx<desiredCount;r++){
      for(let c=0;c<cols && idx<desiredCount;c++){
        const text = words[idx];
        const tw = ctx.measureText(text).width;
        const maxXpad = Math.max(0, cellW - tw);
        const left = c*cellW + (maxXpad>0 ? Math.floor(Math.random()*maxXpad) : 0);
        const maxYpad = Math.max(0, cellH - fontSize);
        const top = r*cellH + (maxYpad>0 ? Math.floor(Math.random()*maxYpad) : 0);
        const color = palette[Math.floor(Math.random()*palette.length)];
        items.push({text,left,top,color});
        idx++;
      }
    }
  }

  resize();

  function frame(){
    ctx.fillStyle='black';
    ctx.fillRect(0,0,w,h);
    for(let i=0;i<items.length;i++){
      const it = items[i];
      ctx.fillStyle = it.color;
      ctx.fillText(it.text, it.left, it.top);
    }
    for(let i=0;i<items.length;i++){
      items[i].color = palette[Math.floor(Math.random()*palette.length)];
    }
    requestAnimationFrame(frame);
  }

  requestAnimationFrame(frame);
})();
