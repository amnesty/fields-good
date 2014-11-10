function fieldsGood( jQuery ) {
  // IBAN fields
  $( ".fg-iban" ).keyup( ibanKeyUp );
  $( ".fg-iban" ).keydown( ibanKeyUp );
  $( ".fg-iban" ).change( ibanValidate );
  
  /*
   * Controls key up event for IBAN fields.
   */
  function ibanKeyUp() {
    ibanPattern.call( this );
    ibanValidate.call( this );
  }
  
  /*
   * Controls user input when working with
   * IBAN fields. Inserts spaces every 4
   * characters.
   */
  function ibanPattern() {
    var value = this.value;
    value = value.addEvery( " ", 4 );
    value = value.toUpperCase();
    this.value = value;
  }

  /*
   * Validates the input for IBAN fields
   * and sends feedback to the user.
   */
  function ibanValidate() {
    var value = this.value;
    value = value.replace( new RegExp( ' ', 'g' ), '' );
    
    var formGroup = $( this ).parent( '.form-group' );
    var formIcon = $( this ).nextAll( '.glyphicon' );
    
    resetFeedBackColor( formGroup, formIcon );
    
    if( isValidIBAN( value ) ) {
      formGroup.addClass( "has-success" );
      formIcon.addClass( "glyphicon-ok" );
      console.log( "This IBAN: " + value + " looks correct." );
    } else {
      formGroup.addClass( "has-error" );
      formIcon.addClass( "glyphicon-remove" );
      console.log( "This IBAN: " + value + " looks wrong." );
    }
  }

  /*
   * Removes classes for forms feedback.
   */
  function resetFeedBackColor( formGroup, formIcon ) {
    formGroup.removeClass( "has-success" );
    formGroup.removeClass( "has-error" );
    formIcon.removeClass( "glyphicon-ok" );
    formIcon.removeClass( "glyphicon-remove" );
  }
}

/*
 * Starts controlling inputs when page has
 * already been loaded.
 */
$( document ).ready( fieldsGood );