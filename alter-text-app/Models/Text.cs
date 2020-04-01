using System;
using System.ComponentModel.DataAnnotations;

namespace alter_text_app.Models
{
    public class Text
    {
        [Key]
        public int Id { get; set; }

        public string Name { get; set; }

        [Required]
        public string FilePath { get; set; }
    }
}
