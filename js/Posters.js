AFRAME.registerComponent("posters", {
    schema: {
        state: {
            type: "string",
            default: "posters-list"
        },
        selectedCard: {
            type: "string",
            default: "#card1"
        }
    },
    init: function() {
        this.postersContainer = this.el;
        this.createCards();
    },
    createCards: function() {
        const thumbnailRef = [
            {
                id: "superman",
                url: '../assets/thumbnails/superman.jpg'
            },
            {
                id: "spiderman",
                url: '../assets/thumbnails/spiderman.jpg'
            },
            {
                id: "avengers",
                url: '../assets/thumbnails/avengers.jpg'
            },
            {
                id: "calvinhobbes",
                url: '../assets/thumbnails/calvinhobbes.jpg'
            }
        ];

        let preXPos = -60;
        for (var item in thumbnailRef) {
            const posX = preXPos + 25;
            const posY = 10;
            const posZ = -40;
            const pos = {
                x: posX,
                y: posY,
                z: posZ
            }
            preXPos = posX;
            const border = this.createBorder(pos, thumbnailRef[item].id);
            const poster = this.createPoster(thumbnailRef[item]);
            border.appendChild(poster);
            this.postersContainer.appendChild(border);
        }
    },
    createBorder: function(position, id) {
        const entity = document.createElement("a-entity");
        entity.setAttribute("id", id);
        entity.setAttribute("visible", true);
        entity.setAttribute("geometry", {
            primitive: "plane",
            width: 22,
            height: 30
        });
        entity.setAttribute("position", position);
        entity.setAttribute("material", {
            color: "#fff"
        });
        entity.setAttribute("cursor-listener", {});
        return entity;
    },
    createPoster: function(item) {
        const entity = document.createElement("a-entity");
        entity.setAttribute("geometry", {
            primitive: "plane",
            width: 20,
            height: 28
        });
        entity.setAttribute("position", {
            x: 0,
            y: 0,
            z: 1
        })
        entity.setAttribute("material", {
            src: item.url
        });
        return entity;
    }
});