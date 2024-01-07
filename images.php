<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Images</title>
</head>

<body>
    <h1>List of Images</h1>
    <ul>
        <?php
        for ($i = 1; $i <= 10; $i++) {
            $imageId = rand(1, 1000);
            echo "<li><img src='https://picsum.photos/id/{$imageId}/200' alt='Image {$i}'></li>";
        }
        ?>
    </ul>
</body>

</html>