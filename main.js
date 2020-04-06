Vue.component('row-component', {
    template: ' <div class="row-grid">\
                <div class="row-elements">{{name}}</div>\
                <div class="row-elements">{{meaning}}</div>\
                <div class="row-elements">{{time}}</div>\
                <div class="row-elements">{{image}}</div>\
                </div>',
    props: ['name', 'meaning', 'time', 'image']
});

        consoles: [
            {
                name: 'Tyrannosaurus Rex',
                meaning: 'Rex is Latin for King',
                time: 'Cretaceous Period',
                image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/94/Tyrannosaurus_Rex_Holotype.jpg/250px-Tyrannosaurus_Rex_Holotype.jpg',
                collected: false
            }, {
                name: 'Velociraptor',
                meaning: 'Swift Seizer in Latin',
                time: 'Cretaceous Period',
                image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a6/Velociraptor_fruita_2.jpg/220px-Velociraptor_fruita_2.jpg',
                collected: false
            }, {
                name: 'Triceratops',
                meaning: 'Three Horned Face',
                time: 'Cretaceous Period',
                image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/ec/LA-Triceratops_mount-2.jpg/220px-LA-Triceratops_mount-2.jpg',
                collected: false
            }, {
                name: 'Brontosaurus',
                meaning: 'Thunder Lizard',
                time: 'Late Jurassic Period',
                image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/45/Brontosaurus_Yale_Peabody_cropped.jpg/250px-Brontosaurus_Yale_Peabody_cropped.jpg',
                collected: true
            }, {
                name: 'Brachiosaurus',
                meaning: 'Arm Lizard',
                time: 'Late Jurassic, early Cretacesous Periods',
                image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/ed/Brachiosaurus_mount.jpg/220px-Brachiosaurus_mount.jpg',
                collected: true
            }
        ]
    },
    methods: {
        submitHandler: () => {
            console.log('submitted');
            vm.consoles = vm.consoles.concat(vm.newConsoleObj);
            vm.resetForm();
        },
        resetForm: () => {
            vm.newConsoleObj = {
                    name: '',
                        meaning: '',
                        time: 'null',
                        image: '',
                        collected: false
            };
        },
        deleteItem: item => {
            vm.consoles = vm.consoles.filter(console => {
                return console !== item;
            })
        }
    }
});