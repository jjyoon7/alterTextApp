using System;
using System.Text.Json;

namespace alter_text_app.Models
{
    public class TextItem
    {
        public string id { get; set; }

        public string conetn { get; set; }

        public override string ToString() => JsonSerializer.Serialize<TextItem>(this);
    }
}
