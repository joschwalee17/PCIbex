PennController.ResetPrefix(null); // Initiates PennController

PennController.ResetPrefix(null)
Sequence( "welcome" , randomize("experiment") , "send" , "final" )
newTrial( "welcome" ,
    defaultText
        .print()
    ,
    newText("<p>Welcome!</p>")
    ,
    newText("<p>In this experiment, you will report the direction of the arrow in the middle.</p>")
    ,
    newText("<p>Press the <strong>F</strong> key if the middle arrow is pointing left, and the <strong>J</strong> key if the middle arrow is pointing right.</p>")
    ,
    newText("<p>Remember to only pay attention to the arrow in the middle.</p>")
    ,
    newText("<p>Please enter your ID and then click the button below to start the experiment.</p>")
    ,
    newTextInput("inputID")
        .print()
    ,
    newButton("Start")
        .print()
        .wait()
    ,
    newVar("ID")
        .global()
        .set( getTextInput("inputID") )
)
.log( "ID" , getVar("ID") )
Template( variable => 
  newTrial( "experiment" ,
    newTimer(500)
        .start()
        .wait()
    ,
    newImage("arrow", variable.arrow)
        .size(200,200)
        .print()
    ,
    newSelector()
        .keys("F", "J")
        .log()
        .wait()
    ,
    newTimer(500)
        .start()
        .wait()
  )
  .log( "ID"     , getVar("ID")    )
  .log( "Middle Direction"   , variable.MidDir   )
  .log( "Surrounding Direction" , variable.SurDir )
)
SendResults( "send" )
newTrial( "final" ,
    newText("<p>Thank you for your participation!</p>")
        .print()
    ,
    newButton("void")
        .wait()

