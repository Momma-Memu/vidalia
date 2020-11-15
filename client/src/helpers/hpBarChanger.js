const hpBarChanger = (ref, ogHp, currentHp) => {
    console.log(ref)
    if(!ref) return;
    if(!ref.current) return;
    const percent = (currentHp / ogHp) * 100;
    const styler = `${percent}%`;
    ref.current.style.width = styler;
}

export default hpBarChanger;