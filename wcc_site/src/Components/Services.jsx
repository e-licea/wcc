import React from 'react'

//Imports
import ScrollAnimation from 'react-animate-on-scroll'


export default function Services() {
    return (
        <div id = 'Services'>
            <section className="menu">
                <h4>Logo Services</h4>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Corrupti omnis sint ipsam necessitatibus animi possimus temporibus ducimus vitae ab ut in ullam labore praesentium dolorem dicta aspernatur itaque, deserunt tenetur.</p>

                <h4>Search Engine Optimization</h4>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsam quam porro illo neque pariatur explicabo dignissimos corrupti cupiditate, ad expedita consequuntur natus doloribus. Exercitationem omnis iste voluptates, dignissimos numquam incidunt.</p>

                <h4>React Web Applications</h4>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut, est atque, ea ducimus alias maxime repudiandae, minima et labore adipisci fugiat a ipsa! Voluptas eligendi quibusdam voluptate, delectus explicabo asperiores.</p>

                <h4>Classic Style Website</h4>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iste blanditiis quae quas accusamus quisquam delectus, quaerat explicabo maiores beatae consectetur minima adipisci architecto alias exercitationem vel inventore sequi et rerum.</p>
                <ScrollAnimation duration = '2' animateIn = 'fadeIn'>
                    Some Text
                </ScrollAnimation>
            </section>
        </div>
    )
}
