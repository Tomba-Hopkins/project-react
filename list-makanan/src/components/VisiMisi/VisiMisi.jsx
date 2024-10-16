import VisiTab from "./VisiTab"

export default function VisiMisi(){

    const isi = [
        {
            id: 1,
            title: 'Murah',
            body: 'Membuat orang lain tidak terbebani dengan harga nya🤖'
        },
        {
            id: 2,
            title: 'Banyak',
            body: 'Membuat orang lain tidak terbebani dengan porsi nya😎'
        },
        {
            id: 3,
            title: 'Berkualitas',
            body: 'Membuat orang lain tidak terbebani dengan kualitas nya😛'
        },
    ]
    
    
    return (

        <>
            <VisiTab isi={isi} />
        
        </>

    )
}