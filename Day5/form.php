<html>
    <body>
        <h1>Hello Welcome, <?php echo $_POST["fName"]; echo " "; echo $_POST["lName"]; ?></h1>
        <p>Here is the Image Data that you shared:</p>
        <p><?php print_r($_FILES['image']) ?></p>
    </body>
</html>