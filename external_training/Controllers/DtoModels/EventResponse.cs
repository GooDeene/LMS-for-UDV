﻿namespace external_training.Controllers.DtoModels
{
    public class EventResponse
    {
        public int TrainingApplicationId { get; set; }
        public string TrainingTopic { get; set; } = string.Empty;
        public string Status { get; set; } = string.Empty;
        public DateTime Begin { get; set; }
        public DateTime End { get; set; }
    }
}
