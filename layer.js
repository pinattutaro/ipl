const main = () => {
    const layer = document.querySelectorAll('*[depth]');
    layer.forEach((el) => {
        const depth = el.getAttribute("depth") || 0;

        el.style.cssText = `
            z-index: -${depth};
        `;

        // const timeline = new ScrollTimeline({
        //     source: document.documentElement,
        //     axis: 'block',
        //     scrollOffsets: [CSS.percent(0), CSS.percent(100)]
        // });

        const timeline = new ViewTimeline({
            subject: el,
            axis: 'block',
        });

        el.animate(
            [
                { transform: `translateY(${-depth/2}dvh)` },
                { transform: `translateY(0dvh)` },
                { transform: `translateY(${depth/2}dvh)` }
            ],
            {
                fill: "both",
                timeline: timeline,
                rangeStart: "entry 0%",
                rangeEnd: "exit 100%",
            }
        )
    });
}

document.addEventListener("DOMContentLoaded", main);