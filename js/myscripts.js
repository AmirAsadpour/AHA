var player1_score = 0;
var player2_score = 0;
var player1_name = "player1";
var player2_name = "player2";

// Is dividble score or not
function isdividble(p1_score, p2_score) {
    if ((p1_score + p2_score)% 5 == 0)
        return true;
    return false;
}

$(function() {
    
    $("#player1-score-text").text(player1_score);
    $("#player2-score-text").text(player2_score);
    
    // gaining focus on textbox for better UX
    $("#tboxplayer1-score").click(function() {
        $("#txtplayer1-score").focus();   
    });
    
    $("#tboxplayer2-score").click(function() {
        $("#txtplayer2-score").focus();   
    });
    
     $("#edit-1").click(function() {
        $("#txtplayer1-score").focus();   
    });
    
     $("#edit-2").click(function() {
        $("#txtplayer2-score").focus();   
    });
                
 });
$("#btn-submit").click(function() {
                     
    if (($("#txtplayer1-score").val() == '') || $("#txtplayer2-score").val() == '') {
        
         $(".alert-costume").html('<span class="flaticon-attention5"></span> Enter The Scores !!')
         .css("opacity", "1");
        
        // Turning focus to textbox for better UX
        $("#txtplayer1-score").focus();
    }
       
    
    else if (isdividble(parseInt($("#txtplayer1-score").val()), parseInt($("#txtplayer2-score").val()))) {
            $(".alert-costume").css("opacity", "0");
            player1_score += parseInt($("#txtplayer1-score").val());
            player2_score += parseInt($("#txtplayer2-score").val());
        
            if ((player1_score >= 62) && (player2_score >= 62)) {
                if (player1_score - player2_score < 0)
                     $(".alert-costume").html(player2_name + '  Won !!')
                     .css("color", "#f39c12").css("opacity", "1");
                else if (player1_score - player2_score > 0)
                    $(".alert-costume").html(player1_name + '  Won !!')
                    .css("color", "#f39c12").css("opacity", "1");
            }
                
        
            else if (player1_score >= 62)
                $(".alert-costume").html(player1_name + '  Won !!')
                .css("color", "#f39c12").css("opacity", "1");
            else if (player2_score >= 62)
                $(".alert-costume").html(player2_name + '  Won !!')
                .css("color", "#f39c12").css("opacity", "1");
        
            $("#player1-score-text").text(player1_score);
            $("#player2-score-text").text(player2_score);
            
            // Cleaning the textbox
            $("#txtplayer1-score").val(''); 
            $("#txtplayer2-score").val('');
        }
    
    else {
        
        $(".alert-costume").html('<span class="flaticon-attention5"></span> you have entered wrong score !!')
        .css("opacity", "1");
        
         $("#txtplayer1-score").focus().select();
        
    }
       
    
   
 });

$("#btn-reset").click(function() {
    player1_score = 0;
    player2_score = 0;
    $("#player1-score-text").text(player1_score);
    $("#player2-score-text").text(player2_score);
    
    $(".alert-costume").css("opacity", "0");
    
     $("#txtplayer1-score").val(''); 
     $("#txtplayer2-score").val('');
});