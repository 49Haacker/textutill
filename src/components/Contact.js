import React from 'react'

export default function Contact() {
  return (
    <>
      <div className="col-md-6">
        <dl className="row bg-white shadow-3 rounded p-3">
          <dt className="col-sm-4">Company Name:</dt>
          <dd className="col-sm-8">StartupFlow Dawid Adach, Michał Szymański s.c.</dd>
          <dt className="col-sm-4">Address:</dt>
          <dd className="col-sm-8">Kijowska 7/49, 03-738 Warsaw, Poland <i className="flag flag-poland"></i></dd>
          <dt className="col-sm-4">TAX ID / VAT ID:</dt>
          <dd className="col-sm-8">PL1132911940</dd>
          <dt className="col-sm-4">NIP:</dt>
          <dd className="col-sm-8">1132911940</dd>
          <dt className="col-sm-4">REGON:</dt>
          <dd className="col-sm-8">364673139</dd>
          <dt className="col-sm-4">CAGE:</dt>
          <dd className="col-sm-8">9ASNH</dd>
          <dt className="col-sm-4">Licensing:</dt>
        </dl>
      </div>

      {/*Google map*/}
      <div id="map-container-google-3" className="z-depth-1-half map-container-3">
        <iframe src="https://maps.google.com/maps?q=warsaw&t=k&z=13&ie=UTF8&iwloc=&output=embed"
          frameBorder={0} style={{ border: 0 }} allowFullScreen="" />
      </div>
    </>
  )
}