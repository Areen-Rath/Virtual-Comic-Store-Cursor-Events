AFRAME.registerComponent("cursor-listener", {
    schema: {
        itemId: {
            type: "string",
            default: ''
        }
    },
    init: function() {
        this.enter();
        this.leave();
        this.click();
    },
    handlePosters: function() {
        const id = this.el.getAttribute("id");
        const posterssId = ["superman", "spiderman", "avengers", "calvinhobbes"];
        if (posterssId.includes(id)) {
            const postersContainer = document.querySelector("#posters-container");
            postersContainer.setAttribute("cursor-listener", {
                itemId: id
            });
            this.el.setAttribute("material", {
                color: "#d76b30",
                opacity: 1
            });
        }
    },
    enter: function() {
        this.el.addEventListener("mouseenter", () => {
            this.handlePosters();
        });
    },
    leave: function() {
        this.el.addEventListener("mouseleave", () => {
            const { itemId } = this.data;
            if (itemId) {
                const el = document.querySelector(`#${itemId}`);
                const id = el.getAttribute("id");
                if (id === itemId) {
                    el.setAttribute("material", {
                        color: "#0077cc",
                        opacity: 1
                    });
                }
            }
        });
    },
    click: function() {
        this.el.addEventListener("click", e => {
            const postersContainer = document.querySelector("#posters-container");
            const { state } = postersContainer.getAttribute("posters");
            if (state === "posters-list") {
                const id = this.el.getAttribute("id");
                const postersId = ["superman", "spiderman", "avengers", "calvinhobbes"];
                if (postersId.includes(id)) {
                    postersContainer.setAttribute("posters", {
                        state: "view",
                        selectedCard: id
                    });
                }
            }
        });
    }
});
