import VisiTab from "./VisiTab"

export default function VisiMisi(){

    const isi = [
        {
            title: 'Murah',
            body: 'Membuat orang lain tidak terbebani dengan harga nya🤖'
        },
        {
            title: 'Banyak',
            body: 'Membuat orang lain tidak terbebani dengan porsi nya😎'
        },
        {
            title: 'Berkualitas',
            body: 'Membuat orang lain tidak terbebani dengan kualitas nya😛'
        },
        {
            title: 'Ups',
            body: 'Aku adalah jebakan😂'
        }
    ]
    
    
    return (

        <>
            <VisiTab isi={isi} />
        
        </>

    )
}