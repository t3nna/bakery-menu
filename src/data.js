const data = [
    {
        type: 'Na słono',
        items: [
            {
                category: 'Chleb',
                dishes: [
                    {
                        name: 'Mały chlebek',
                        id: '1234asdf',
                        price: 3.50,
                        desc: 'Mąka, sól, cukier, drożdże',
                        longDesc: 'Mąka, sól, cukier, drożdże',
                        // img: 'https://firebasestorage.googleapis.com/v0/b/batumi-menu.appspot.com/o/PXL_20220608_070427665.NIGHT.jpg?alt=media&token=85b765ff-40dd-4618-972f-e91fec305c8f'
                        img: '/prepareBatumi/bulka7.jpg'

                    },
                    {
                        name: 'Chleb',
                        id: '129iuds34',
                        price: 5.00,
                        desc: 'Mąka, sól, cukier, drożdże',
                        longDesc: 'Mąka, sól, cukier, drożdże',
                        img: '/prepareBatumi/bulka5.jpg'
                        // img: 'https://firebasestorage.googleapis.com/v0/b/batumi-menu.appspot.com/o/PXL_20220608_070355081.jpg?alt=media&token=1d0db5cb-ee2a-4335-b22c-b6b2823369dc'

                    },

                ]
            },
            {
                category: 'Chaczpuri',
                dishes: [
                    {
                        name: 'Chaczapuri z szynką i serem',
                        id: '12dsd3dsdfjlj34',
                        price: 12.00,
                        desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet autem corporis cum, libero quis repellendus.',
                        longDesc: 'Mąka, margaryna, sól, cukier, ' +
                            'szynka, ser',
                        img: '/prepareBatumi/bulka2.jpg'
                        // img: 'https://firebasestorage.googleapis.com/v0/b/batumi-menu.appspot.com/o/PXL_20220608_065916499.NIGHT.jpg?alt=media&token=32a72047-3505-4f78-aa4f-9c29900e6d07'

                    },
                    {
                        name: 'Chaczpuri z Wieprzowiną',
                        id: '129sawdf3feasdfdfad34',
                        price: 10.00,
                        desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet autem corporis cum, libero quis repellendus.',
                        longDesc: 'Mąka, margaryna, sól, cukier, ' +
                            'przyprawy, cebula, zioła',
                        img: '/prepareBatumi/bulka.jpg'
                        // img: 'https://firebasestorage.googleapis.com/v0/b/batumi-menu.appspot.com/o/PXL_20220608_065824972.NIGHT.jpg?alt=media&token=48ff0b93-af41-47c0-8b03-0b952225c075'

                    },{
                        name: 'Chaczpuri z Kurczkiem',
                        id: '129sdsaw3fsdfedfad34',
                        price: 10.00,
                        desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet autem corporis cum, libero quis repellendus.',
                        longDesc: 'Mąka, margaryna, sól, cukier, ' +
                            'przyprawy, cebula, zioła',
                        img: '/prepareBatumi/bulka4.jpg'
                        // img: 'https://firebasestorage.googleapis.com/v0/b/batumi-menu.appspot.com/o/PXL_20220608_065824972.NIGHT.jpg?alt=media&token=48ff0b93-af41-47c0-8b03-0b952225c075'

                    },{
                        name: 'Chaczpuri z Wołowiną',
                        id: '129asdsaw3fedfad3asdf4',
                        price: 10.00,
                        desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet autem corporis cum, libero quis repellendus.',
                        longDesc: 'Mąka, margaryna, sól, cukier, ' +
                            'przyprawy, cebula, zioła',
                        img: '/prepareBatumi/bulka3.jpg'
                        // img: 'https://firebasestorage.googleapis.com/v0/b/batumi-menu.appspot.com/o/PXL_20220608_065824972.NIGHT.jpg?alt=media&token=48ff0b93-af41-47c0-8b03-0b952225c075'

                    },
                    {
                        name: 'Chaczpuri z szpinakiem i serem',
                        id: '1asdf2dvh29sdsdfad34',
                        price: 10.00,
                        desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet autem corporis cum, libero quis repellendus.',
                        longDesc: 'Mąka, margaryna, sól, cukier, ' +
                            'szpinak, ser',
                        img: '/prepareBatumi/bulka2.jpg'
                        // img: 'https://firebasestorage.googleapis.com/v0/b/batumi-menu.appspot.com/o/PXL_20220608_065824972.NIGHT.jpg?alt=media&token=48ff0b93-af41-47c0-8b03-0b952225c075'

                    },{
                        name: 'Chaczpuri trzy sery',
                        id: '1sd2dvhsdf29sdfad34',
                        price: 10.00,
                        desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet autem corporis cum, libero quis repellendus.',
                        longDesc: 'Mąka, margaryna, sól, cukier, ' +
                            'mix serów',
                        // img: 'https://firebasestorage.googleapis.com/v0/b/batumi-menu.appspot.com/o/PXL_20220608_065824972.NIGHT.jpg?alt=media&token=48ff0b93-af41-47c0-8b03-0b952225c075'
                        img: '/prepareBatumi/bulka4.jpg'

                    },

                    {
                        name: 'Chaczpuri z szpinakiem i łososiem',
                        id: '12sdf9j4wasdfad34',
                        price: 12.00,
                        desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet autem corporis cum, libero quis repellendus.',
                        longDesc: 'Mąka, margaryna, sól, cukier, ' +
                            'szpink, ser, łosoś ',
                        // img: 'https://firebasestorage.googleapis.com/v0/b/batumi-menu.appspot.com/o/PXL_20220608_065824972.NIGHT.jpg?alt=media&token=48ff0b93-af41-47c0-8b03-0b952225c075'
                        img: '/prepareBatumi/bulka.jpg'

                    }

                    ,{
                        name: 'Chaczpuri z wędzonym serem i pieczrkami',
                        id: '12sdfads3rg9sdfad34',
                        price: 10.00,
                        desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet autem corporis cum, libero quis repellendus.',
                        longDesc: 'Mąka, margaryna, sól, cukier, ' +
                            'pieczarki, wędzony ser',
                        // img: 'https://firebasestorage.googleapis.com/v0/b/batumi-menu.appspot.com/o/PXL_20220608_065824972.NIGHT.jpg?alt=media&token=48ff0b93-af41-47c0-8b03-0b952225c075'
                        img: '/prepareBatumi/bulka.jpg'

                    },
                    {
                        name: 'Ostre Fasola',
                        id: '1asd29sdfaasf3rdasdf34',
                        price: 10.00,
                        desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet autem corporis cum, libero quis repellendus.',
                        longDesc: 'Mąka, margaryna, sól, cukier, ' +
                            'fasola, przyprawy, masło, czosnek',
                        // img: 'https://firebasestorage.googleapis.com/v0/b/batumi-menu.appspot.com/o/PXL_20220608_065853986.NIGHT.jpg?alt=media&token=4b5d9bea-6560-42c6-bfa4-d47308a7a860'
                        img: '/prepareBatumi/bulka3.jpg'

                    },

                ]
            },
            {
                category: 'Chaczapuri tradycyjne',
                dishes: [
                    {
                        name: 'Imeruli',
                        id: '129sfdasfsdfad34',
                        price: 12.00,
                        desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet autem corporis cum, libero quis repellendus.',
                        longDesc: 'mąka, sól, drożdże, olej, ' +
                            'ser, boczek',
                        // img: 'https://firebasestorage.googleapis.com/v0/b/batumi-menu.appspot.com/o/PXL_20220608_064904053.jpg?alt=media&token=c30bf942-dc42-4674-99d6-67c5b7e398e7'
                        img: '/prepareBatumi/bulka9.jpg'

                    },
                    {
                        name: 'Megruli z serem',
                        id: '1asd29ssfsdsdfasdd34',
                        price: 12.00,
                        desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet autem corporis cum, libero quis repellendus.',
                        longDesc: 'mąka, sól, drożdże, olej, ' +
                            'ser',
                        // img: 'https://firebasestorage.googleapis.com/v0/b/batumi-menu.appspot.com/o/PXL_20220608_064839862.jpg?alt=media&token=3b5dcbba-957c-4edc-ae35-4475e6d9d577'
                        img: '/prepareBatumi/bulka9.jpg'

                    },{
                        name: 'Megruli z boczkiem ',
                        id: '1asd29ssfsdsdfasdd34',
                        price: 12.00,
                        desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet autem corporis cum, libero quis repellendus.',
                        longDesc: 'mąka, sól, drożdże, olej, ' +
                            'ser',
                        // img: 'https://firebasestorage.googleapis.com/v0/b/batumi-menu.appspot.com/o/PXL_20220608_064904053.jpg?alt=media&token=c30bf942-dc42-4674-99d6-67c5b7e398e7'
                        img: '/prepareBatumi/bulka9.jpg'

                    },
                    {
                        name: 'Kubdari',
                        id: '129ssfsdfasdfadad34',
                        price: 12.00,
                        desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet autem corporis cum, libero quis repellendus.',
                        longDesc: 'mąka, sól, drożdże, olej, ' +
                            'wołowina, wieprzowina',
                        // img: 'https://firebasestorage.googleapis.com/v0/b/batumi-menu.appspot.com/o/PXL_20220608_064937991.jpg?alt=media&token=d5bf44eb-8767-40e2-9377-c1dfe61a1d6a'
                        img: '/prepareBatumi/bulka8.jpg'

                    },{
                        name: 'Aczruli',
                        id: '129ssfshhbbfdfad34',
                        price: 12.00,
                        desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet autem corporis cum, libero quis repellendus.',
                        longDesc: 'mąka, sól, drożdże, olej, ' +
                            'ser, jajka',
                        // img: 'https://firebasestorage.googleapis.com/v0/b/batumi-menu.appspot.com/o/PXL_20220608_064839862.jpg?alt=media&token=3b5dcbba-957c-4edc-ae35-4475e6d9d577'
                        img: '/prepareBatumi/bulka10.jpg'

                    },
                ]
            },
            {
                category: 'Paluch',
                dishes: [
                    {
                        name: 'Paluch z ziemniakami i serem',
                        id: '129ssffahjrrsdfad34',
                        price: 12.00,
                        desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet autem corporis cum, libero quis repellendus.',
                        longDesc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet autem corporis cum, libero quis repellendus. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet autem corporis cum, libero quis repellendus.',
                        // img: 'https://firebasestorage.googleapis.com/v0/b/batumi-menu.appspot.com/o/PXL_20220608_065214811.jpg?alt=media&token=64ee7ff0-cf9e-45a6-bae1-4915f77570e9'
                        img: '/prepareBatumi/bulka6.jpg'

                    },{
                        name: 'Paluch z ziemniakami i pieczrkami',
                        id: '129ssfaere3gsdfad34',
                        price: 12.00,
                        desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet autem corporis cum, libero quis repellendus.',
                        longDesc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet autem corporis cum, libero quis repellendus. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet autem corporis cum, libero quis repellendus.',
                        // img: 'https://firebasestorage.googleapis.com/v0/b/batumi-menu.appspot.com/o/PXL_20220608_065214811.jpg?alt=media&token=64ee7ff0-cf9e-45a6-bae1-4915f77570e9'
                        img: '/prepareBatumi/bulka6.jpg'

                    },{
                        name: 'Paluch z ziemniakami i boczkiem',
                        id: '129sef33fgesfsdfad34',
                        price: 12.00,
                        desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet autem corporis cum, libero quis repellendus.',
                        longDesc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet autem corporis cum, libero quis repellendus. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet autem corporis cum, libero quis repellendus.',
                        // img: 'https://firebasestorage.googleapis.com/v0/b/batumi-menu.appspot.com/o/PXL_20220608_065214811.jpg?alt=media&token=64ee7ff0-cf9e-45a6-bae1-4915f77570e9'
                        img: '/prepareBatumi/bulka14.jpg'

                    },{
                        name: 'Paluch z fasolą i boczkiem',
                        id: '129sshsdgfsbfsdfad34',
                        price: 12.00,
                        desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet autem corporis cum, libero quis repellendus.',
                        longDesc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet autem corporis cum, libero quis repellendus. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet autem corporis cum, libero quis repellendus.',
                        // img: 'https://firebasestorage.googleapis.com/v0/b/batumi-menu.appspot.com/o/PXL_20220608_065214811.jpg?alt=media&token=64ee7ff0-cf9e-45a6-bae1-4915f77570e9'
                        img: '/prepareBatumi/bulka6.jpg'

                    },{
                        name: 'Paluch z serem',
                        id: '129saf4fgsfsdfad34',
                        price: 12.00,
                        desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet autem corporis cum, libero quis repellendus.',
                        longDesc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet autem corporis cum, libero quis repellendus. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet autem corporis cum, libero quis repellendus.',
                        // img: 'https://firebasestorage.googleapis.com/v0/b/batumi-menu.appspot.com/o/PXL_20220608_065214811.jpg?alt=media&token=64ee7ff0-cf9e-45a6-bae1-4915f77570e9'
                        img: '/prepareBatumi/bulka14.jpg'

                    },
                ]
            },
        ]
    },
    {
        type: 'Na słodko',
        items: [
            {
                category: 'Croissants',
                dishes: [
                    {
                        name: 'Croissant z wiśnią',
                        id: '12dfasdbhtyf34',
                        price: 9.00,
                        desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet autem corporis cum, libero quis repellendus.',
                        longDesc: 'Mąka, margaryna, sól, cukier, ' +
                            'mrożone owoce: wiśnia',
                        // img: 'https://firebasestorage.googleapis.com/v0/b/batumi-menu.appspot.com/o/PXL_20220608_070144369.jpg?alt=media&token=0b87d9ef-5092-4a04-90f1-1da150f23188'
                        img: '/prepareBatumi/bulka11.jpg'

                    },
                    {
                        name: 'Croissant z borówką',
                        id: '129fasfedv34',
                        price: 9.00,
                        desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet autem corporis cum, libero quis repellendus.',
                        longDesc: 'Mąka, margaryna, sól, cukier, ' +
                            'mrożone owoce: borówka',
                        // img: 'https://firebasestorage.googleapis.com/v0/b/batumi-menu.appspot.com/o/PXL_20220608_070144369.jpg?alt=media&token=0b87d9ef-5092-4a04-90f1-1da150f23188'
                        img: '/prepareBatumi/bulka12.jpg'

                    },
                    {
                        name: 'Croissant wiśnia czekolada',
                        id: '1asds24',
                        price: 9.00,
                        desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet autem corporis cum, libero quis repellendus.',
                        longDesc: 'Mąka, margaryna, sól, cukier, ' +
                            'mrożone owoce: wiśnia, czekolada',
                        // img: 'https://firebasestorage.googleapis.com/v0/b/batumi-menu.appspot.com/o/PXL_20220608_070144369.jpg?alt=media&token=0b87d9ef-5092-4a04-90f1-1da150f23188'
                        img: '/prepareBatumi/bulka13.jpg'

                    },
                    {
                        name: 'Croissant z truskawką',
                        id: '124gfdvee',
                        price: 9.00,
                        desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet autem corporis cum, libero quis repellendus.',
                        longDesc: 'Mąka, margaryna, sól, cukier, ' +
                            'mrożone owoce: truskawka',
                        // img: 'https://firebasestorage.googleapis.com/v0/b/batumi-menu.appspot.com/o/PXL_20220608_070144369.jpg?alt=media&token=0b87d9ef-5092-4a04-90f1-1da150f23188'
                        img: '/prepareBatumi/bulka11.jpg'

                    },
                    {
                        name: 'Croissant z jabłkiem i cynamonem ',
                        id: '1adfasv24',
                        price: 9.00,
                        desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet autem corporis cum, libero quis repellendus.',
                        longDesc: 'Mąka, margaryna, sól, cukier, ' +
                            'jabłka, cynamon',
                        // img: 'https://firebasestorage.googleapis.com/v0/b/batumi-menu.appspot.com/o/PXL_20220608_070144369.jpg?alt=media&token=0b87d9ef-5092-4a04-90f1-1da150f23188'
                        img: '/prepareBatumi/bulka13.jpg'

                    }, {
                        name: 'Croissant z twarogiem i maliną ',
                        id: '12sdfef34',
                        price: 9.00,
                        desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet autem corporis cum, libero quis repellendus.',
                        longDesc: 'Mąka, margaryna, sól, cukier, ' +
                            'mrożone owoce: malina, twaróg',
                        // img: 'https://firebasestorage.googleapis.com/v0/b/batumi-menu.appspot.com/o/PXL_20220608_070144369.jpg?alt=media&token=0b87d9ef-5092-4a04-90f1-1da150f23188'
                        img: '/prepareBatumi/bulka12.jpg'

                    },
                    {
                        name: 'Croissant z maliną ',
                        id: '1adsfvgr424',
                        price: 9.00,
                        desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet autem corporis cum, libero quis repellendus.',
                        longDesc: 'Mąka, margaryna, sól, cukier, ' +
                            'mrożone owoce: malina',
                        // img: 'https://firebasestorage.googleapis.com/v0/b/batumi-menu.appspot.com/o/PXL_20220608_070144369.jpg?alt=media&token=0b87d9ef-5092-4a04-90f1-1da150f23188'
                        img: '/prepareBatumi/bulka11.jpg'

                    },
                    {
                        name: 'Croissant z bananem i czekoladą  ',
                        id: '1fas2adffv4',
                        price: 9.00,
                        desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet autem corporis cum, libero quis repellendus.',
                        longDesc: 'Mąka, margaryna, sól, cukier, ' +
                            'banan, czekolada',
                        // img: 'https://firebasestorage.googleapis.com/v0/b/batumi-menu.appspot.com/o/PXL_20220608_070144369.jpg?alt=media&token=0b87d9ef-5092-4a04-90f1-1da150f23188'
                        img: '/prepareBatumi/bulka13.jpg'

                    },

                ]
            },

        ]
    },


]

export default data