import Document, { Html, Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {
 render() {
  return (
   <Html lang="en">
    <Head>
     <meta name="description" content="Brenda E-commerce Nextjs project"></meta>
     <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css" ></link>
     <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.14.0/css/all.min.css"
     />
     <link rel="preconnect" href="https://fonts.gstatic.com" />
     <link href="https://fonts.googleapis.com/css2?family=Ruslan+Display&display=swap" rel="stylesheet" />
     <script src="https://code.jquery.com/jquery-3.2.1.slim.min.js" ></script>
     <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.12.9/umd/popper.min.js"></script>
     <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.min.js"></script>
    </Head>
    <body>
     <Main />
     <NextScript />
    </body>
   </Html>
  )
 }
}


export default MyDocument